import './HomeUi.css';
import './LoginUi.css';
import Header from './Header.js';
import Footer_div from './Footer.js';
import React, { useState } from "react";
import ReactDOM from "react-dom";

function LoginUi() {
    // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "admin",
      password: "123"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
    // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
  return (
    <div> 
       
            <Header /> 
  
            <section class="section"> 
                <div class="box-main"> 
                    <div class="firstHalf"> 
                    <h1 class="text-big" id="program"> <br/><br/><br/><br/>
                            Applicant Tracking System 
                        </h1> 
                        <p class="text-small"> 
                            An applicant tracking system (ATS) is a software application that helps companies manage the recruitment process. ATS can help companies: 
Organize candidates,Filter applicants,Collect candidate information
Organize prospects based on experience and skill set,Structure and customize hiring
Attract, source, evaluate, and hire candidates.
ATS can be implemented or accessed online at enterprise- or small-business levels. 
 
                        </p> 
                        
                    </div> 
                </div> 
            </section> 
            
            
            <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
    <Footer_div />
            
        </div>
        


    
  );
}
function Home() {
    return <h2>Home</h2>;
  }
  
  function Contacts() {
    return <h2>Contacts</h2>;
  }
export default LoginUi;