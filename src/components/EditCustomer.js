import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';


function EditCustomer(props) {
  const [customer, setCustomer] = useState({
    firstname: '',
    lastname: '',
    streetaddress: '',
    postcode: '',
    city: '',
    email: '',
    phone: ''
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
       setCustomer({
        firstname: props.params.data.firstname,
        lastname: props.params.data.lastname,
        streetaddress: props.params.data.streetaddress,
        postcode: props.params.data.postcode,
        city: props.params.data.city,
        email: props.params.data.email,
        phone: props.params.data.phone
    })
      setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    props.updateCustomer(props.params.value[0].href, customer);
    setOpen(false);
}

  const inputChanged = (event) => {
      setCustomer({...customer, [event.target.name]: event.target.value});
  }


    return (
        <div>
          <IconButton color="action" onClick={handleClickOpen}>
            <EditIcon/> 
          </IconButton>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Edit customer</DialogTitle>
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
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );

}

export default EditCustomer;