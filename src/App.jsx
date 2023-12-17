import { useState } from 'react'
import { Link } from 'react-router-dom';
import React from 'react';
import './App.css'
import './form.css'
import ImageCarousel from './ImageCarousel'
import DateTimeDisplay from './DateTimeDisplay'
import ContactForm from './ContactForm';
import ValidationForm from './ValidationForm';
import RegistrationForm from './RegistrationForm';
import TypingText from './TypingText'



function App() {

  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showConForm, setShowConForm] = useState(false);
  const [showRegForm, setShowRegForm] = useState(false);
  const [showLogForm, setShowLogForm] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleConButtonClick = () => {
    setShowConForm(true);
  };

  const handleRegButtonClick = () => {
    setShowRegForm(true);
  };

  const handleLogButtonClick = () => {
    setShowLogForm(true);
  };

  const handleContactFormSubmit = () => {
    // Update visibility states after contact form submission
    setShowConForm(false);
  };

  
  const handleRegFormSubmit = () => {
    // Update visibility states after contact form submission
    setShowLogForm(false);
  };


  const handleLogFormSubmit = () => {
    // Update visibility states after contact form submission
    setShowLogForm(false);
  };

  const handleConCloseForm = () => {
    setShowConForm(false);
    
  };

  const handleRegCloseForm = () => {
    setShowRegForm(false);
  };

  const handleLogCloseForm = () => {
    setShowLogForm(false);
  };


  return (
    <>
     

      <div className={`card ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className="card1">
        <nav> 
          <div className='subnav1'> Lets connect:</div>
          <div className='subnav2'> <img src="./src/assets/git.png" alt="Icon" /> </div>  
          <div className='subnav3'> <img src="./src/assets/linkedin.png" alt="Icon" /></div>  
          <div className='subnav4'> <img src="./src/assets/whatsapp.png" alt="Icon" /></div>  
          <div className='subnav5'> <img src="./src/assets/twitter.png" alt="Icon" /></div> 
        </nav>

          <div></div>
          <div>
            <TypingText />
          </div>
        </div>

        <div className="card2">

          <div className='toggle'>
            {/* Toggle Button for Dark/Light Mode */}
          <button className='toggle-button' onClick={toggleMode}>
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>

          </div>

          
          <div className='date'>
            <DateTimeDisplay />
          </div>

          <div className='form'>
            <div className='div-out'>
            {showConForm && (
              <ContactForm  onCloseForm={handleConCloseForm}    onSubmitCallback={handleContactFormSubmit} />
            )}            
            {!showConForm && (
              <button onClick={handleConButtonClick}>
                 Contact 
              </button>
            )}
            </div>
         
          </div>

          <div className='form2'>
            <div className='div-out'>
                {showRegForm && (<RegistrationForm  onCloseForm={handleRegCloseForm}    onSubmitCallback={handleRegFormSubmit} />)}            
                
                {!showRegForm && (
              <button onClick={handleRegButtonClick}>
                Registration 
              </button>
            )}
            </div>
         
          </div>

          <div className='form3'>
            <div className='div-out'>
                {showLogForm && (<ValidationForm  onCloseForm={handleLogCloseForm}    onSubmitCallback={handleLogFormSubmit} />)}            
                
                {!showLogForm && (
              <button onClick={handleLogButtonClick}>
                Login
              </button>
            )}

                
            </div>
         
          </div>

          
        </div>
      </div>
    </>
  );
}

export default App;

