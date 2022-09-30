import {defineConfig} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    storeDomain: 'custom-checkouts.myshopify.com',
    storefrontToken: Oxygen?.env?.PUBLIC_STOREFRONT_API_TOKEN,
    storefrontApiVersion: '2022-07',
  },
});
