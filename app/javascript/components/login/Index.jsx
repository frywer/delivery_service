import React, { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

export default function Index({  }) {
    const [signPage, setSignPage] = useState('in');

    if (signPage === 'up') {
        return (
            <SignUp setSignPage={ setSignPage } />
        )
    } else {
        return (
            <SignIn setSignPage={ setSignPage } />
        )
    }
}