import React from 'react';

import Dashboard from './dashboard/Index'
import Login from './login/Index'
import {useSelector} from "react-redux";

export default function Application() {
    const uid = useSelector(state => state.uid)

    if (uid === null) {
        return (
            <Login />
        )
    } else {
        return (
            <Dashboard />
        )
    }
}
