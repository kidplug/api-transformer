//Dependencies
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Components
import {Layout} from "./client/components/layout/Layout";
import HomePage from "./client/components/pages/HomePage";


//Create redux store
const store = createStore(
    ()=>{},
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f //add redux tab to dev tools
    )
);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Layout>
                <Route exact path="/" component={HomePage}/>
            </Layout>
        </Router>

    </Provider>, window.document.getElementById("app"));