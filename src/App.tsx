import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Nav from './components/nav/Nav';
import Posts from './components/posts/Posts';
import Users from './components/users/Users';
import Comments from './components/comments/Comments';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
            
            <Route path='/' element={<Navigate to={'/posts'} />} />

            {/* <Route path='/login' element={<Login />}></Route> */}
            {/* <Route path='/register' element={<Register />}></Route> */}

            <Route path='/posts' element={<Posts />} />
            {/* <Route path='/new-post' element={<NewPostForm />}></Route>} */}
            {/* <Route path='/edit/:id' element={<EditPostForm />}></Route> */}

            <Route path='/people' element={<Users />} />

            {/* <Route path='/new-comment' element={<NewCommentForm />}></Route> */}


            <Route path='*' element={<div className="container"> <h1>404 Not Found</h1> </div>} />
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
