import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUser, setUid} from "../../actions/Index";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Navbar() {
    const dispatch = useDispatch();
    const classes = useStyles();
    const uid = useSelector(state => state.uid)
    const client = useSelector(state => state.client)
    const accessToken = useSelector(state => state.accessToken)
    const current_user = useSelector(state => state.currentUser)

    function logOut() {
        const params = new FormData();
        params.append('uid', uid);
        params.append('client', client);
        params.append('access-token', accessToken);
        fetch('/auth/sign_out.json', {
            method: 'DELETE',
            body: params,
        }).then((response) => {
                if (response.ok) {
                    dispatch(setCurrentUser(null))
                    dispatch(setUid(null))
                } else {
                    console.log(`error ---------> ${response.error}`)
                }
            })
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        TOSHI deliveries
                    </Typography>
                    { current_user && current_user.email }
                    { current_user && <Button color="inherit" onClick={ logOut }>Log out</Button> }
                </Toolbar>
            </AppBar>
        </div>
    );
}