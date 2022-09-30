import { useState } from "react";

function BillingInfo() {
  const [formFields, setFormFields] = useState([
    { 
        name: "", age: ""

    }
]);


  const handleFormChange = event => {
    let data = [...formFields];
    data[0][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    max-w-screen-mdformFields);
  };

  return (
    <div className="">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name="name"
                placeholder="Name"
                onChange={(event) => handleFormChange(event)}
                value={form.name}
              />
              <input
                name="age"
                placeholder="Age"
                onChange={(event) => handleFormChange(event)}
                value={form.age}
              />

            </div>
          );
        })}
      </form>
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default BillingInfo;
