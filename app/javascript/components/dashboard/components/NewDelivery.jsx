import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import UserAutocomplete from './UserAutocomplete'
import {useSelector} from "react-redux";
import Snackbar from '@material-ui/core/Snackbar';

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const [errors, setErrors] = useState({});
    const [snackOpen, setSnackOpen] = useState(false);
    const uid = useSelector(state => state.uid)
    const client = useSelector(state => state.client)
    const accessToken = useSelector(state => state.accessToken)
    const currentUser = useSelector(state => state.currentUser)

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleSubmit() {
        event.preventDefault();
        const params = new FormData(event.target);
        params.append('delivery[from_user_id]', currentUser.id);
        fetch('/deliveries.json', {
            method: 'POST',
            body: params,
            headers: {
                'uid': uid,
                'client': client,
                'access-token': accessToken,
            }
        }).then((response) => response.json())
            .then(data => {
            if(data.errors) {
                setErrors(data.errors)
            } else {
                setSnackOpen(true)
                setOpen(false);
            }
        })
            .catch((error) => {
                console.log(`base form------> error: ${error}`)
            })
    }
    
    function handleCloseSnack() {
        setSnackOpen(false)
    }
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{ float: 'right' }}>
                New Delivery
            </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Send new delivery to user </DialogTitle>
                    <DialogContent>
                        <form onSubmit={handleSubmit} id='custom-form'>
                            <UserAutocomplete />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="delivery_item"
                                name="delivery[item]"
                                label="Item"
                                fullWidth
                                helperText={errors.item}
                                error={ errors.item !== undefined }
                                required
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="delivery_delivery_address"
                                label="Delivery Address"
                                name="delivery[delivery_address]"
                                fullWidth
                                helperText={errors.delivery_address}
                                error={ errors.delivery_address !== undefined }
                                required
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button color="primary" type="submit" form='custom-form'>
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>

            <Snackbar
                key={`bottom, left`}
                open={snackOpen}
                onClose={handleCloseSnack}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                variant="success"
                message={<span id="message-id">Delivery was created.</span>}
            />
        </div>
    );
}
