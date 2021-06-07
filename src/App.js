import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Knowledge from './components/pages/Knowledge';
import NotFound from './components/pages/NotFound';
import Portfolio from './components/pages/Portfolio';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/competences" component={Knowledge} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;