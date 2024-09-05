import React, { useState } from 'react';

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  return isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign in.</h1>;
}

function ClickMeButton({ toggleLogin }) {
  return <button onClick={toggleLogin}>Click Me</button>;
}

function App_Greeting() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn);  // Toggle the isLoggedIn state
  }

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
      <ClickMeButton toggleLogin={toggleLogin} />
    </div>
  );
}

export default App_Greeting;
