import { Suspense } from "react";
import {
  CacheLong,
  gql,
  Seo,
  ShopifyAnalyticsConstants,
  useServerAnalytics,
  useShopQuery,
  useLocalization,
  ProductOptionsProvider,
} from "@shopify/hydrogen";

import { Layout } from "../components/global/Layout.server";
import { HomepageBanner } from "../components/homepageBanner.server";
import { FeaturedProduct } from "../components/FeaturedProduct.server";
import { Banner } from "../components/Banner.client";
import { getPageContent } from "../lib/placeholders";
import Multicolumn from "../components/Multicolumns.client";
import Checkout from "../components/Checkout.client";
import { DescriptionBanner } from "../components/DescriptionBanner";

export default function Homepage() {
  useServerAnalytics({
    shopify: {
      pageType: ShopifyAnalyticsConstants.pageType.home,
    },
  });

  return (
    <Layout>
      <Suspense>
        <SeoForHomepage />
      </Suspense>
      <Suspense>
        <HomepageContent />
      </Suspense>
    </Layout>
  );
}

function HomepageContent() {
  const {
    language: { isoCode: languageCode },
    country: { isoCode: countryCode },
  } = useLocalization();

  const {
    HeroBanner,
    FullWidthBanner,
    Product,
    Trust,
    Promotion,
    CheckoutInput,
    descriptionBanner,
  } = getPageContent();

  const {
    data: { product },
  } = useShopQuery({
    query: PRODUCT_QUERY,
  });

  return (
    <>
      <ProductOptionsProvider data={product}>
        <HomepageBanner content={HeroBanner} />
        <hr />
        <Multicolumn content={Trust} />
        <Multicolumn content={Promotion} />
        <DescriptionBanner content={descriptionBanner} />
        <Banner content={FullWidthBanner} />
        <section className="py-4 max-w-screen-md mx-auto w-full grid md:grid-cols-2 gap-2 grid-rows">
          <FeaturedProduct product={product} />
          <div className="border-2 border-black  bg-grey">RIGHT SIDE</div>
        </section>
        <section className="py-4 max-w-screen-md mx-auto w-full grid md:grid-cols-2 gap-2 grid-rows">
          <Checkout content={CheckoutInput} product={product} />
          <div className="border-2 border-black  bg-grey">RIGHT SIDE</div>
        </section>
      </ProductOptionsProvider>
    </>
  );
}

function SeoForHomepage() {
  const {
    data: {
      shop: { name, description },
    },
  } = useShopQuery({
    query: HOMEPAGE_SEO_QUERY,
    cache: CacheLong(),
    preload: true,
  });

  return (
    <>
      <Seo
        type="homepage"
        data={{
          title: name,
          description,
          titleTemplate: "%s · Powered by Hydrogen",
        }}
      />
    </>
  );
}

/**
 * The homepage content query includes a request for custom metafields inside the alias
 * `heroBanners`. The template loads placeholder content if these metafields don't
 * exist. Define the following five custom metafields on your Shopify store to override placeholders:
 * - hero.title             Single line text
 * - hero.byline            Single line text
 * - hero.cta               Single line text
 * - hero.spread            File
 * - hero.spread_seconary   File
 *
 * @see https://help.shopify.com/manual/metafields/metafield-definitions/creating-custom-metafield-definitions
 * @see https://github.com/Shopify/hydrogen/discussions/1790
 */

/* const HOMEPAGE_CONTENT_QUERY = gql`
  ${MEDIA_FRAGMENT}
  ${PRODUCT_CARD_FRAGMENT}
  query homepage($country: CountryCode, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    heroBanners: collections(
      first: 3
      query: "collection_type:custom"
      sortKey: UPDATED_AT
    ) {
      nodes {
        id
        handle
        title
        descriptionHtml
        heading: metafield(namespace: "hero", key: "title") {
          value
        }
        byline: metafield(namespace: "hero", key: "byline") {
          value
        }
        cta: metafield(namespace: "hero", key: "cta") {
          value
        }
        spread: metafield(namespace: "hero", key: "spread") {
          reference {
            ...Media
          }
        }
        spreadSecondary: metafield(namespace: "hero", key: "spread_secondary") {
          reference {
            ...Media
          }
        }
      }
    }
    featuredCollections: collections(
      first: 3
      query: "collection_type:smart"
      sortKey: UPDATED_AT
    ) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
    featuredProducts: products(first: 12) {
      nodes {
        ...ProductCard
      }
    }
  }
`; */

const HOMEPAGE_SEO_QUERY = gql`
  query shopInfo {
    shop {
      name
      description
    }
  }
`;

const PRODUCT_QUERY = gql`
  query Product {
    product(handle: "id-police") {
      id
      title
      vendor
      variants(first: 100) {
        nodes {
          id
          availableForSale
          compareAtPriceV2 {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          image {
            id
            url
            altText
            width
            height
          }
          priceV2 {
            amount
            currencyCode
          }
          sku
          title
          unitPrice {
            amount
            currencyCode
          }
        }
      }
      seo {
        description
        title
      }
    }
  }
`;
