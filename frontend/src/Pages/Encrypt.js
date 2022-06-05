import React from 'react';
import Navbar from "../Component/Navbar/Navbar";
import Textbox from '../Component/TextBox/Textbox';

const Encrypt=()=>{
    return (
      <React.Fragment>
        <Navbar />
        <p>Encrypt the message</p>
        <Textbox/>
      </React.Fragment>
    );
}

export default Encrypt;