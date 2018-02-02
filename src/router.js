// import React from 'react';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

export const middleware = routerMiddleware(history);