import React, { Component } from 'react';
import './App.scss';
import logo from './images/logo.jpg';
import { Cart, Shipping } from './pages';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="app">
                <header className="header">
                    <img src={logo} className="logo" alt="logo" />
                    <div className="title">Front-End Developer<span>.</span></div>
                </header>
                <Router>
                    <main className="main">
                        <Route exact path="/" render={() => <Redirect to="/cart"/>}/>
                        <Route path="/cart" component={ Cart }/>
                        <Route path="/shipping" component={ Shipping }></Route>
                    </main>
                </Router>
            </div>
        );
    }
}

export default App;
