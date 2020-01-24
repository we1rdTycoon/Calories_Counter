import React from 'react'; 
import ReactDom from 'react-dom'; 
import App from './components/app.js';
import './style.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todos from './reducers/index.js'

const store = createStore(todos)
store.subscribe(() => console.log(store.getState()))


ReactDom.render(
    <Provider store={store}>
       <App/>
    </Provider>,
    document.querySelector('#app')
);