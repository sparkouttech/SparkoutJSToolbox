import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import ListView from './pages/listView.page';
import InfoView from './pages/InfoView.page';

import "./assets/css/style.css";

function App() {
  return (
    <Router>
      <Route path="/" component={ListView} exact/>
      <Route path="/info/:id" component={InfoView}/>
    </Router>
  );
}

export default App;
