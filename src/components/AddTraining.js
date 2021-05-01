import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import SportsTennisIcon from '@material-ui/icons/SportsTennis';


function AddTraining (props) {
    const [open, setOpen] = useState(false);
    const [training, setTraining] = useState({
        date: '',
        duration: '',
        activity: '',
        customer:''
    });
    

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const inputChanged = (event) => {
        setTraining({...training, [event.target.name]: event.target.value});
    }

    const handleSave = () => {
      setTraining(training.customer = props.params.data.links[0].href)
      setTraining(training.date = new Date(training.date))
      props.addTraining(training)
        handleClose();
    }

    return (
        <div>
          <IconButton color="action" onClick={handleClickOpen}>
            <SportsTennisIcon/>
          </IconButton>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
              New training to {props.params.data.firstname}
            </DialogTitle>
            <DialogContent>
            <TextField
                 margin="dense"
                 name="date"
                 label="Date"
                 value={training.date}
                 onChange={inputChanged}
                 fullWidth
                />
                 <TextField
                 margin="dense"
                 name="duration"
                 label="Duration"
                 value={training.duration}
                 onChange={inputChanged}
                 fullWidth
                />
                 <TextField
                 margin="dense"
                 name="activity"
                 label="Activity"
                 value={training.activity}
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


export default AddTraining;