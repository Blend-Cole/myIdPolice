import { useUrl } from "@shopify/hydrogen";
import { FooterMenu } from "./FooterMenu.client";

/**
 * A server component that specifies the content of the footer on the website
 */
export function Footer({ menu }) {
  const { pathname } = useUrl();

  const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname);
  const countryCode = localeMatch ? localeMatch[1] : null;

  const isHome = pathname === `/${countryCode ? countryCode + "/" : ""}`;
  const itemsCount = menu
    ? menu?.items?.length + 1 > 4
      ? 5
      : menu?.items?.length + 1
    : [];

    console.log(itemsCount);
  return (
    <>
      <div className="footer-bg" aria-hidden="true">
      </div>
      <footer
        role="contentinfo"
        className={`bg-black w-full gap-6 py-8 px-6 md:px-8 lg:px-12 `}
      >
        <div
          className={`bg-black grid min-h-[25rem] text-white max-w-screen-md mx-auto items-start grid-flow-row w-full gap-6 py-8 px-6 md:px-8 lg:px-12 md:gap-8 lg:gap-12 md:grid-cols-${itemsCount}
        bg-primary dark:bg-contrast dark:text-primary text-contrast overflow-hidden`}
        >
          <FooterMenu menu={menu} />
        </div>
        <div
          className={`self-end pt-8 opacity-50 md:col-span-2 md:col-span-${itemsCount}`}
        >
          &copy; {new Date().getFullYear()} / Shopify, Inc. Hydrogen is an MIT
          Licensed Open Source project. This website is carbon&nbsp;neutral.
        </div>
      </footer>
    </>
  );
}
