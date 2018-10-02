import React, { Component } from 'react';
// import './reset.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-darken">
          <div className='landing'>
            <header>
              <div className= 'logo'>Start Bootstrap</div>
              <div className='Links'>
                <h3>Services</h3>
                <h3>Portfolio</h3>
                <h3>About</h3>
                <h3>Team</h3>
                <h3>Contact</h3>
              </div>
              <button id = 'menu' >Menu</button>
            </header>
              <div className='middle-content'>
                <h2 id = 'welcome'>Welcome To Our Studio!</h2>
                <h1 id = 'nice'>IT'S NICE TO MEET YOU</h1>
                <button id = 'landingbutton'>TELL ME MORE</button>
              </div>
          </div>
        </div>       
      </div>
    );
  }
}

export default App;
