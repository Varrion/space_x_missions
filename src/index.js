import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ApolloProvider} from "@apollo/client";
import {apolloClient} from "./config/ApolloConfig";
import {BrowserRouter as Router} from "react-router-dom";


ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <Router>
            <App/>
        </Router>
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
