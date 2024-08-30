import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Posts from './components/posts/Posts';
import Users from './components/users/Users';
import Comments from './components/comments/Comments';
import { Login } from './components/authentication/Login';
import { Register } from './components/authentication/Register';
import { NotFound } from './components/errors/NotFound';
import { SubmitEmail } from './components/authentication/SubmitEmail';
import { SubmitCode } from './components/authentication/SubmitCode';
import { SubmitPassword } from './components/authentication/SubmitPassword';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
            
            <Route path='/' element={<Navigate to={'/posts'} />} />

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/submit-email' element={<SubmitEmail />} />
            <Route path='/submit-code' element={<SubmitCode />} />
            <Route path='/submit-password' element={<SubmitPassword />} />
            

            <Route path='/posts' element={<Posts />} />
            {/* <Route path='/new-post' element={<NewPostForm />}></Route>} */}
            {/* <Route path='/edit/:id' element={<EditPostForm />}></Route> */}

            <Route path='/people' element={<Users />} />

            {/* <Route path='/new-comment' element={<NewCommentForm />}></Route> */}


            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>

      </header>

      <section className="App-section">



      </section>

      <footer className='App-footer'>
        Blog App Inc
      </footer>
    </div>
  );
}

export default App;
