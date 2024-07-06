import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className='App-nav'>
          <a href="">
            <img className='App-logo' alt="" />
          </a>
          <a>Posts</a>
          <a>People</a>
        </nav>
      </header>

      <section className="App-section">
        There are no posts yet
      </section>

      <footer className='App-footer'>
        Blog App Inc
      </footer>
    </div>
  );
}

export default App;
