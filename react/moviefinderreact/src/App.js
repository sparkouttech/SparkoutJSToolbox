import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/movieList.page';
import MovieInfo from './pages/movieInfo.page';

import './assets/css/style.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={MovieList} exact/>
      <Route path="/info/:id" component={MovieInfo}/>
    </BrowserRouter>
  );
}

export default App;
