import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Route from './Components/Route';
import Router from './Components/Router';
import Root from './Components/Root';
import About from './Components/About';

function App() {

  return (
    <div className="App">
     <Router>
      <Route path="/" component={<Root/>} />
      <Route path="/about" component={<About/>} />
     </Router>
    </div>
  )
}

export default App
