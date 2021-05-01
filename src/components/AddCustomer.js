import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


function AddCustomer(props) {
    const [open, setOpen] = useState(false);
    const [customer, setCustomer] = useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: ''
    });
    

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const inputChanged = (event) => {
        setCustomer({...customer, [event.target.name]: event.target.value});
    }

    const handleSave = () => {
        props.addCustomer(customer);
        console.log(customer);
        handleClose();
    }

    return (
        <div>
          <Button style={{marginTop:10}} variant="outlined" color="primary" onClick={handleClickOpen}>
            Add new customer
          </Button>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">New customer</DialogTitle>
            <DialogContent>
            <TextField
                 margin="dense"
                 name="firstname"
                 label="First name"
                 value={customer.firstname}
                 onChange={inputChanged}
                 fullWidth
                />
                <TextField
                 margin="dense"
                 name="lastname"
                 label="Last name"
                 value={customer.lastname}
                 onChange={inputChanged}
                 fullWidth
                />
                <TextField
                 margin="dense"
                 name="streetaddress"
                 label="Street address"
                 value={customer.streetaddress}
                 onChange={inputChanged}
                 fullWidth
                />
                <TextField
                 margin="dense"
                 name="postcode"
                 label="Postcode"
                 value={customer.postcode}
                 onChange={inputChanged}
                 fullWidth
                />
                <TextField
                 margin="dense"
                 name="city"
                 label="City"
                 value={customer.city}
                 onChange={inputChanged}
                 fullWidth
                />
                <TextField
                 margin="dense"
                 name="email"
                 label="Email"
                 value={customer.email}
                 onChange={inputChanged}
                 fullWidth
                />
                <TextField
                 margin="dense"
                 name="phone"
                 label="Phone number"
                 value={customer.phone}
                 onChange={inputChanged}
                 fullWidth
                />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleSave} color="primary">
                Add
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );

}

export default AddCustomer;