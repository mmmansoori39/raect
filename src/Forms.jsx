import React, { useState } from "react";
import Button from '@mui/material/Button';


function Forms() {
  const [data, setdata] = useState({
    fname: "",
    lname: "",
    email: "",
  });

  const inpval = (e) => {
    console.log(e.target.value)
    console.log(e.target.name.substring(5))

    const value= e.target.value;
    const name=e.target.name.substring(5)

    setdata((prevalue) => {

      return{
        ...prevalue,
        [name]:value,
      }

      // if (name === "data.fname") {
      //   return {
      //     fname: value,
      //     lname: prevalue.lname,
      //     email: prevalue.email,
      //   };
      // }
      // else if (name === "data.lname") {
      //   return {
      //     fname: prevalue.fname,
      //     lname: value,
      //     email: prevalue.email,
      //   };
      // }
      // else if (name === "data.email") {
      //   return {
      //     fname: prevalue.fname,
      //     lname: prevalue.lname,
      //     email: value,
      //   };
      // }
      
      // console.log(prevalue);
    });
  };

  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="forms">
      <form onSubmit={submit}>
        <div>
          <h1>
            Hello {data.fname} {data.lname}{" "}
          </h1>
          <p>{data.email}</p>
          <input
            type="Text"
            name="data.fname"
            placeholder="Enter your Firstname"
            // value={data.fname}
            onChange={inpval}
          />
          <input
            type="Text"
            name="data.lname"
            placeholder="Enter your Lastname"
            // value={data.lname}
            onChange={inpval}
          />
          <input
            type="Text"
            name="data.email"
            placeholder="Enter your Email"
            autoComplete="off"
            // value={data.email}
            onChange={inpval}
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
