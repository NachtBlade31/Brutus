import React,{useState} from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const Textbox=(props)=>{

    const [message,setMessage]=useState('')
    const [shift, setShift] = useState(0);

    const handleMessageChange = (e) => {
      setMessage(e.target.value);
    };

    const handleShiftChange = (e) => {
      setShift(e.target.value);
    };

    const onSubmit = (e) => {
      props.textCallback({
          'message':message,
          'shift':shift
      })
      e.preventDefault();     
    };

    return (
      <React.Fragment>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          alignItems="center"
          justifyContent="center"
          display="flex"
          minHeight="20vh"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Message"
              type="text"
              onChange={handleMessageChange}
              value={message}
            />
            <TextField
              id="outlined-number"
              label="Shifts"
              type="number"
              required
              onChange={handleShiftChange}
              value={shift}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <Button variant="contained" onClick={onSubmit}>
            Submit
          </Button>
        </Box>
      </React.Fragment>
    );
}

export default Textbox;