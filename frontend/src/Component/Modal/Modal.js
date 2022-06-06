import React,{useState} from 'react';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ResultModal=(props)=>{

    const [open, setOpen] = useState(true);
    const handleClose = () => setOpen(false);

    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {`The Result for the query for ${props.Type} of message ${props.Query} for value of shift ${props.Shift} is `  }
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {props.Result}
            </Typography>
          </Box>
        </Modal>
      </div>
    );

}

export default ResultModal;