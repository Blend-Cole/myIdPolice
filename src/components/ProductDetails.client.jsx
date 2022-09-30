import {
  useProductOptions,
  ProductPrice,
  Image,
  Money,
} from "@shopify/hydrogen";

export function ProductDetails({ product }) {
  return (
    <div className="w-full overflow-x-hidden gap-4 md:gap-8 grid">
      <div className="grid items-start gap-6 lg:gap-20 grid-cols-1">
        <div className="grid gap-8 p-0 md:p-6 md:px-0 top-[6rem] lg:top-[8rem] xl:top-[10rem]">
          <ProductForm />
          <ProductImage />
          <CartContents product={product} />
        </div>
      </div>
    </div>
  );
}

function ProductForm() {
  const { options } = useProductOptions();

  return (
    <form className="grid gap-10">
      {
        <div className="grid gap-4">
          {options.map(({ name, values }) => {
            if (values.length === 1) {
              return null;
            }
            return (
              <div
                key={name}
                className="flex flex-wrap items-baseline justify-start gap-6"
              >
                <div className="flex flex-wrap items-baseline w-full">
                  <OptionRadio name={name} values={values} />
                </div>
              </div>
            );
          })}
        </div>
      }
    </form>
  );
}

function OptionRadio({ values, name }) {
  const { selectedOptions, setSelectedOption } = useProductOptions();

  return (
    <>
      {values.map((value) => {
        const checked = selectedOptions[name] === value;
        const id = `option-${name}-${value}`;

        return (
          <label
            className={`lg:w-1/2 cursor-pointer transition-all duration-200 p-4 text-center rounded ${
              checked && "bg-blue text-white"
            }`}
            key={id}
            htmlFor={id}
            tabIndex="0"
          >
            <input
              className="sr-only"
              type="radio"
              id={id}
              name={`option[${name}]`}
              value={value}
              checked={checked}
              onChange={() => setSelectedOption(name, value)}
            />
            <div className="text-sm">{value}</div>
          </label>
        );
      })}
    </>
  );
}

function ProductImage() {
  const {
    selectedVariant: { image },
  } = useProductOptions();
  return <Image data={image} alt="Product image" />;
}

function CartContents({ product }) {
  const { selectedVariant } = useProductOptions();
  const shippingAndHandling = selectedVariant.sku === "15399D" ? 5.99 : 0;
  const shippingCost =
    parseFloat(selectedVariant.priceV2.amount) + shippingAndHandling;

  return (
    <>
      <table className="table-fixed text-sm text-left">
        <thead>
          <tr>
            <th>Item Description</th>
            <th>Price</th>
            <th>S&H</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{selectedVariant.title}</td>
            <td>
              <ProductPrice
                className="text-gray-900 font-semibold"
                variantId={selectedVariant.id}
                data={product}
              />
            </td>
            <td>
              <Money
                data={{
                  amount: shippingAndHandling.toString(),
                  currencyCode: "GBP",
                }}
              />
            </td>
            <td>
              <Money
                data={{ amount: shippingCost.toString(), currencyCode: "GBP" }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <table className="table-fixed text-sm text-left">
        <tbody>
          <tr>
            <td>Subtotal:</td>
            <td>
              <ProductPrice
                variantId={selectedVariant.id}
                data={product}
              />
            </td>
          </tr>
          <tr>
            <td>Shipping & Handling:</td>
            <td>
              <Money
                data={{
                  amount: shippingAndHandling.toString(),
                  currencyCode: "GBP",
                }}
              />{" "}
            </td>
          </tr>
          <tr>
            <td>
              <strong>Order Total:</strong>
            </td>
            <td>
              <strong>
                <Money
                  data={{
                    amount: shippingCost.toString(),
                    currencyCode: "GBP",
                  }}
                />
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
