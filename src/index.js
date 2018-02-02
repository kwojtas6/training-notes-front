import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';
import store from './store';
import {App} from './modules/app';
import './modules/core/layout.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>,
document.getElementById('root')
);