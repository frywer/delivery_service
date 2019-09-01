import React from 'react';
import Application from './Application'
import rootReducer from '../reducers/Index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Navbar from './layout/Navbar'

export default function Base() {
    const store = createStore(rootReducer);

    return (
        <React.Fragment>
            <Provider store={store}>
                <Navbar />
                <Application />
            </Provider>
        </React.Fragment>
    )
}