import { combineReducers } from 'redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux'
import app from './modules/app';
import { reducer as reduxFormReducer } from 'redux-form';
import {middleware as routerMiddleware} from './router';
import {intlReducer} from 'react-intl-redux';

const rootReducer = combineReducers({
    [app.constants.NAME]: app.reducer,
    routing: routerReducer,
    form: reduxFormReducer,
    intl: intlReducer
});

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk), applyMiddleware(routerMiddleware))
);

export default store;