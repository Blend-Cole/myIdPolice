import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    storeDomain: 'SHOPIFY_STORE_DOMAIN',
    storefrontToken: 'SHOPIFY_STOREFRONT_API_SECRET_TOKEN',
    storefrontApiVersion: '2022-07',
  },
});
