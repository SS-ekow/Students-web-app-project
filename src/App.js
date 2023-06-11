import React from 'react';
import './App.css';
import NavBar from './/components/NavBar';




const App =() => {
  return (
    
    <div className="App">
        <NavBar/>
        <h1> Home</h1>
        <h2> Welcome, Engineer. Log in below to access the rest of the app</h2>
        <div class="login-container">
    <h2>Login</h2>
    <form>
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="Enter your username" required/>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" required/>
      </div>
      <div class="form-group">
        <button type="submit">Login</button>
      </div>
    </form>
  </div>

        
      </div>
    
    
  );
}

export default App;
