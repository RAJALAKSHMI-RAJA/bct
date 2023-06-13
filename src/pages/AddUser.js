import  React,{useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {BiAddToQueue} from "react-icons/bi"

export default function FormDialog(props) {
  
  const initialFormState ={ id:null,firstName:'',lastName:'',contactNumber:'',email:'',dob:''};
  const[user,setUser]=useState(initialFormState);
  const handleInput=(event)=>
  {
      const{name,value}=event.target;
      setUser({...user,[name]:value});
  }
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
      <BiAddToQueue/>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add user</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Give the user details
          </DialogContentText>
          <form onSubmit={
             (event)=>
             {
                 event.preventDefault();
                 if(!user.firstName||!user.lastName) return;
                 props.addUser(user);
                 setUser(initialFormState);
             }
          }>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            name='firstName'
            type="text"
            fullWidth
            variant="standard"
            placeholder='enter the first name'
            value={user.firstName}
            onChange={handleInput}
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            onChange={handleInput}
            label="Last Name"
            type="text"
            name='lastName'
            fullWidth
            variant="standard"
            placeholder='enter the last name'
            value={user.lastName}
          />
           <TextField
            autoFocus
            margin="dense"
            onChange={handleInput}
            id="name"
            label="Contact Number"
            name='contactNumber'
            value={user.contactNumber}
            type="number"
            fullWidth
            variant="standard"
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            onChange={handleInput}
            name='email'
            value={user.email}
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            placeholder='e'
          />
           <TextField
            autoFocus
            margin="dense"
            onChange={handleInput}
            id="name"
            
            type="date"
            fullWidth
            name='dob'
            value={user.dob}
            variant="standard"
            placeholder='enter the dob'
          />
           <TextField
            autoFocus
            margin="dense"
            onChange={handleInput}
            name='age'
            value={user.age}
            id="name"
            label="Age"
            type="number"
            fullWidth
            variant="standard"
            placeholder='Enter the age'
          />
          <Button type='submit'>Add</Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
        </Dialog>
</>
  
  );
}