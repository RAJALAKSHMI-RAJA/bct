import  React,{useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {AiFillDelete}  from "react-icons/ai"


const Delete = (props) => {
    const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} >
      <AiFillDelete onClick={()=>props.deleteUser(props.id)}/>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>DELETED</DialogTitle>
        <DialogContent>
          <DialogContentText>
            selected user has been deleted
          </DialogContentText>
          </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
        </Dialog>
    </div>
  )
}

export default Delete
