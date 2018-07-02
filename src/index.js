import React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import ItemList from './components/ItemList';
import Login from './components/login';

const store = configureStore();

render(
    <Provider store={store}>
        <Login/>
    </Provider>,
    document.getElementById('app')
);


export default store;
