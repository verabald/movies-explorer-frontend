import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import '../../index.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';

function App() {
  return (
    <CurrentUserContext.Provider>
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }
          ></Route>

          <Route path="/signup" element={<Register />}></Route>

          <Route path="/signin" element={<Login />}></Route>

          <Route
            path="/movies"
            element={
              <>
                <Header />
                <Movies />
                <Footer />
              </>
            }
          ></Route>

          <Route path="/saved-movies" element={<SavedMovies />}></Route>

          <Route path="/profile" element={<Profile />}></Route>

          <Route path="*" />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
