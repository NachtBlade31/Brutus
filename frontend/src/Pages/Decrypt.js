import React, { useState } from "react";
import Navbar from "../Component/Navbar/Navbar";
import Textbox from "../Component/TextBox/Textbox";
import ResultModal from "../Component/Modal/Modal";
import Typography from "@mui/material/Typography";

const Decrypt = () => {


    const [message, setMessage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [query,setQuery]=useState({})


    const fetchData = async (data) => {
     await fetch(`http://127.0.0.1:5000/decrypt`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((actualData) => {
          setMessage(actualData['result']);
          setLoading(true);
        })
        .catch((err) => {
          setError(err.message)
          console.log(err.message)
          console.log(error)
        });
    };

    const onDecryptSubmitHandler=  (data)=>{
        fetchData(data)
        setQuery(data)
    }

  return (
    <React.Fragment>
      <Navbar />
      <Typography align="center" marginTop="2em">
        Decrypt the message
      </Typography>

      <Textbox textCallback={onDecryptSubmitHandler} />

      {loading && (
        <ResultModal
          Type="Decryption"
          Shift={query["shift"]}
          Query={query["message"]}
          Result={message}
        />
      )}
    </React.Fragment>
  );
};

export default Decrypt;
