import React, { useState } from 'react';
import './App.css';

// Greeting Component
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

// User Greeting
function UserGreeting() {
  return <h1>Welcome back</h1>;
}

// Guest Greeting
function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

// Login Button
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

// Logout Button
function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

// Main App Component
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div className="App">
      <Greeting isLoggedIn={isLoggedIn} />
      {button}
    </div>
  );
}

export default App;
