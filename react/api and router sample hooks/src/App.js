import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import ListView from './pages/listView.page';
import InfoView from './pages/InfoView.page';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './redux/reducers';
import "./assets/css/style.css";

const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" component={ListView} exact/>
        <Route path="/info/:id" component={InfoView}/>
      </Router>
    </Provider>
  );
}

export default App;
