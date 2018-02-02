import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Switch} from 'react-router';
import {ConnectedRouter} from 'react-router-redux';
import {Provider} from 'react-intl-redux';
import './App.css';
import {history} from '../../../router'
import {connect} from 'react-redux';
import store from '../../../store';
import {Route} from 'react-router-dom';
import Test from './Test';
import {teal800} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    pallete: {
        primary1Color: teal800
    },
    appBar: {
        height: 50,
    },
});

class App extends Component {

    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Provider store={store}>
                    <div className="App">
                        <ConnectedRouter history={history}>
                            <Switch>
                                <Route exact={true} path="/" component={Test} />
                            </Switch>
                        </ConnectedRouter>
                    </div>
                </Provider>
            </MuiThemeProvider>
        )
            ;
    }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(App);