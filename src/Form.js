import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
//import Chats from './Chats'
import Header from './Header'
//import ChatScreen from './ChatScreen'
import WastedCards from './WastedCards'
import SwipeButtons from './SwipeButtons'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <Router>
          <Switch>
          <Route path='/chat.js'>
            <Header /> 
            <WastedCards />
            <SwipeButtons />
          </Route>
          <FormSuccess />
          </Switch>
          </Router>
        )}
      </div>
    </>
  );
};

export default Form;
