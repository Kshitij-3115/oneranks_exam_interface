import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// import react-router-dom 
import {BrowserRouter} from 'react-router-dom'; 
import './index.css';
import App from './App';
// import store - exported by redux file in store folder
import store from './store/index'


ReactDOM.render(<BrowserRouter><Provider store={store}> <App /></Provider> </BrowserRouter>, document.getElementById('root'));
