import { useState } from "react";

function Form() {
    const [values, setValues] = useState({
        name: "name",
        email: "email"
    })
    const handleInput = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
      };
      return (
        <div className="Form">
          <header className="Form-header">
            <h1>Forms</h1>
            <input type="text" placeholder="Name" onChange={handleInput} value={values.name} name="name" />
            <input type="text" placeholder="E-Mail-Adresse" onChange={handleInput} value={values.email} name="email" />
            <p>{values.name}, Deine E-Mail-Adresse lautet {values.email}</p>
          </header>
        </div>
      );
    
    
}
export default Form;