import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));

export default function Deliveries() {
    const classes = useStyles();
    const uid = useSelector(state => state.uid)
    const client = useSelector(state => state.client)
    const accessToken = useSelector(state => state.accessToken)
    const [deliveries, setDeliveries] = useState([]);

    useEffect(() => {
        fetch('my/deliveries.json', {
            method: 'GET',
            headers: {
                'uid': uid,
                'client': client,
                'access-token': accessToken,
            }
        }).then((response) => response.json())
            .then(data => {
                setDeliveries(data)
            })

    }, []);

    return (
        <Paper className={classes.root}>
            <Typography variant="h4" gutterBottom>
               My deliveries
            </Typography>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Sender</TableCell>
                        <TableCell align="right">item</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {deliveries.map(row => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.from_user_mail}
                            </TableCell>
                            <TableCell align="right">{row.item}</TableCell>
                            <TableCell align="right">{row.delivery_address}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
}