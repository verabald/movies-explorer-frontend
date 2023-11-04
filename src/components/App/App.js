import React, { useState } from 'react';
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
import PageNotFound from '../PageNotFound/PageNotFound';
import { mainApi } from '../../utils/MainApi';

function App() {
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const [isSigned, setSign] = useState(false);

  function handleSignUp() {
    navigate('/signin', { replace: true });
  }

  function handleSignIn() {
    setSign(true);
    navigate('/movies', { replace: true });
  }

  function handleSignOut() {
    setSign(false);
    navigate('/signin', { replace: true });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header isSigned={isSigned} />
                <Main />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/signup"
            element={<Register onSignUp={handleSignUp} />}
          ></Route>

          <Route
            path="/signin"
            element={<Login onSignIn={handleSignIn} />}
          ></Route>

          <Route
            path="/movies"
            element={
              <>
                <Header isSigned={isSigned} />
                <Movies />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/saved-movies"
            element={
              <>
                <Header isSigned={isSigned} />
                <SavedMovies />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/profile"
            element={<Profile onSignOut={handleSignOut} isSigned={isSigned} />}
          ></Route>

          <Route path="*" element={<Navigate to="/pagenotfound" replace />} />
          <Route path="/pagenotfound" element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
