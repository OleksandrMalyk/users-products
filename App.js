/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Navigation from './src/navigation/Navigation';

import configureStore from './src/redux/store';
import {Provider} from 'react-redux';
import rootSaga from './src/redux/saga';


export default class App extends React.Component {

    constructor() {
        super();
        this.store = configureStore();
        this.store.runSaga(rootSaga);
    }

    render() {
        return (
            <Provider store={this.store}>
                <Navigation/>
            </Provider>
        );
    }
}


