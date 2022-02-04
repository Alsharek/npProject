import './App.css'
import React from 'react'
import Chats from './Chats'
import Header from './Header'
import ChatScreen from './ChatScreen'
import WastedCards from './WastedCards'
import SwipeButtons from './SwipeButtons'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Wastedbackground from './Background_Wasted.svg';
import WastedLogo from './Wastedlogo.png'
//import Wastedback from './Background_Wasted';

//import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
//import Form from './Form';
//import FormSignup from './FormSignup'


function App() {
  return (
    <div className='app'>
      
      <Router>
        <Switch>
          <Route path='/chat/:person'>
            <Header backButton='/chat' />
            <ChatScreen />
          </Route>
          {/* chat path */}
          <Route path='/chat'>
            <Header backButton='/' />
            <Chats />
          </Route>
          {/* home path */}
          <Route path='/'>
            <Header />
            <WastedCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
      <div className='Background'>
          <img src={Wastedbackground} alt="Backgroundsvg" />
          </div>
    </div>
  )
}



export default App
