import { useState } from "react";
import { Input } from "./elements/Input";
import { CreateCheckout } from "../lib/utils";

function Checkout({ content, product }) {
  const [formFields, setFormFields] = useState(content);

  const handleFormChange = (event, index) => {
    let data = [...formFields];

    data[index].value = event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();

    const addressObject = {};
    formFields.map((field, index) => {
      addressObject[field.name] = formFields[index].value;
    });

    CreateCheckout(addressObject);
  };

  return (
    <div className="border-2 border-black star-label">
      <h3 className="bg-yellow-300 p-4">
        STEP 2: Enter Your Billing Information
      </h3>
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <Input
              key={index}
              name={form.name}
              type={form.type}
              placeholder={form.placeholder}
              onChange={(event) => handleFormChange(event, index)}
              value={form.value}
            />
          );
        })}
      </form>
      <div className="text-center my-8">
        <button
          className="bg-blue p-8 hover:bg-blue-700 text-white font-bold rounded-full text-lg"
          onClick={submit}
        >
          PROCESS ORDER
        </button>
      </div>
    </div>
  );
}

export default Checkout;
