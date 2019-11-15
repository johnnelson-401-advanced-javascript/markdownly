import React from 'react';
import Document from './markdown/Document';
import { Tab } from './markdown/Tab';
import Header from './header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={Document} />
      <Route path="/:id" component={Tab} />
    </Router>
  );
}
