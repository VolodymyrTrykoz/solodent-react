import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Header from './components/header/header';
import Home from './components/pages/home';
import About from './components/pages/about';
import Prices from './components/pages/prices';
import Actions from './components/pages/actions';
import Contacts from './components/pages/contacts';
import Footer from './components/footer/footer';
function App() {
    return (
        <Router>
            <Header />
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/prices" component={Prices}/>
                    <Route path="/actions" component={Actions}/>
                    <Route path="/contacts" component={Contacts}/>
                </Switch>
            <Footer />
        </Router>
    );
}

export default App;
