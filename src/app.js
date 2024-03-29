import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './components/pages/home';
import Services from './components/pages/services';
import About from './components/pages/about';
import Prices from './components/pages/prices';
import Examples from './components/pages/examples';
import Contacts from './components/pages/contacts';
import Footer from './components/footer/footer';
import SuccessNotification from './components/common/success-notification';

@inject('store')
@observer

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <div className='wrapper'>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/services" exact component={Services} />
            <Route path="/prices" exact component={Prices} />
            <Route path="/examples" exact component={Examples} />
            <Route path="/contacts" exact component={Contacts} />
          </Switch>
          <Footer />
        </Router>
        {store.getFormStatus && <SuccessNotification />}
      </div>
    );
  }
}

export default App;
