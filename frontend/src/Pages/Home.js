import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Typography
        id="heading-title"
        variant="h3"
        component="h1"
        align="center"
        marginTop="0.5em"
      >
        Welcome to Brutus
      </Typography>

      <Typography align="center" marginTop="0.5em">
        The Caesar Cipher technique is one of the earliest and simplest method
        of encryption technique. It’s simply a type of substitution cipher,
        i.e., each letter of a given text is replaced by a letter some fixed
        number of positions down the alphabet. For example with a shift of 1, A
        would be replaced by B, B would become C, and so on. The method is
        apparently named after Julius Caesar, who apparently used it to
        communicate with his officials. Thus to cipher a given text we need an
        integer value, known as shift which indicates the number of position
        each letter of the text has been moved down. The encryption can be
        represented using modular arithmetic by first transforming the letters
        into numbers, according to the scheme, A = 0, B = 1,…, Z = 25.
        Encryption of a letter by a shift n can be described mathematically as.
      </Typography>
    </React.Fragment>
  );
};

export default Home;
