import { useState } from "react";
import './Form.css'

function Form() {
    const [values, setValues] = useState({
        firstName: "name",
        secondName: "lastname",
        checkIn: "",
        checkOut: ""
    })
    const handleInput = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value,
        });
    };
    const handelSubmit = (e)=>{
        e.preventDefault()
        console.log(values)
        // handleInput(fistName:"name", secondName: "lastname" )
        
        
    }
      return (
        <form onSubmit={handelSubmit} className="Form">
          <header className="Form-header">
            <h2>New Guest</h2>
            <br/>
            <input type="text" placeholder="First name" onChange={handleInput} value={values.firstName} name="firstName" />
            <input type="text" placeholder="Secod name" onChange={handleInput} value={values.secondName} name="secondName" />
            <input type="date" placeholder="check In" onChange={handleInput} value={values.checkIn} name="checkIn" />
            <input type="date" placeholder="check Out" onChange={handleInput} value={values.checkOut} name="checkOut" />
            <br/>
            {/* <p>{values.firstName}, Deine E-Mail-Adresse lautet {values.secondName}</p> */}
            <br/>
            <button >Submit</button>
          </header>
        </form>
      );
    
    
}
export default Form;