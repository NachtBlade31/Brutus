import React, { useState } from "react";
import Navbar from "../Component/Navbar/Navbar";
import Textbox from "../Component/TextBox/Textbox";

const Decrypt = () => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const onDecryptSubmitHandler= async (data)=>{
        const response = await fetch(`http://127.0.0.1:5000/decrypt`, {
          method: "POST",
          mode: 'cors',
          headers: {
            "Content-Type": "application/json"         
          },
          body:JSON.stringify(data)
        }) .then((response) => response.json())
        .then((actualData) => console.log(actualData))
        .catch((err) => {
            console.log(err.message);
        });
    }

  return (
    <React.Fragment>
      <Navbar />
      <p>Decrypting the message</p>
      <Textbox textCallback={onDecryptSubmitHandler} />
    {data}
    </React.Fragment>
  );
};

export default Decrypt;
