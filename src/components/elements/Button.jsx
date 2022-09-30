import { GraphQLClient, gql } from "graphql-request";

async function main() {
  const endpoint = "https://blend-cole.myshopify.com/api/2020-07/graphql.json";

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: "ec81585689f8e445f56120b5ae06d0d6",
    },
  });

  const CHECKOUT_MUTATION = gql`
    mutation CreateCheckout {
      checkoutCreate(
        input: {
          lineItems: [
            {
              variantId: "gid://shopify/ProductVariant/42694550651079"
              quantity: 1
            }
          ]
          email: "foo@foo.com"
          note: "Hello"
          shippingAddress: {
            address1: "Courtyard Offices",
            address2: "55 High St",
            country: "GB",
            firstName: "foobar",
            lastName: "foobar",
            zip: "B49 5AF",
            city: "Alcester",
          }
        }
      ) {
        checkout {
          id
          webUrl
          email
          note
          shippingAddress {
            firstName
            address1
          }
        }
      }
    }
    
  `;

  const data = await graphQLClient.request(CHECKOUT_MUTATION, {});


}

main().catch((error) => console.error(error));
