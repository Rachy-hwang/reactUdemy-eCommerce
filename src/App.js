import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = props => (
  <div>
    <h1>HATS PAGE</h1>
    {/* <Link to='/'>Home</Link>
    <button onClick={() => props.history.push('/')}>Home</button>
    <Link to={`${props.match.url}/13`}>TO HATS 13</Link> */}
  </div>
)

const TopicDetail = props => {
  return (
    <div>
      <h1>TOPIC LIST PAGE: {props.match.params.hatId} </h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/hats' component={HatsPage} />
          {/* <Route path='/hats/:hatsId' component={TopicDetail} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
