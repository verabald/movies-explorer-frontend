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
import PageNotFound from '../PageNotFound/PageNotFound';
import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

function App() {
  const navigate = useNavigate();

  const [currentToken, setCurrentToken] = useState(
    localStorage.getItem('token')
  );

  const [currentUser, setCurrentUser] = useState({});
  const [isSigned, setIsSigned] = useState(false);
  const [authCheck, setAuthCheck] = useState(false);
  const [email, setEmail] = useState('');
  const [values, setValue] = useState({
    name: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    setCurrentToken(localStorage.getItem('token'));
    if (isSigned && currentToken) {
      Promise.all([moviesApi.getMovies(currentToken)])
        .then((res) => {
          const [user] = res;
          setCurrentUser(user.data);
        })
        .catch(console.error);
    }
  }, [isSigned, currentToken]);

  function checkToken() {
    if (currentToken) {
      mainApi
        .checkToken(currentToken)
        .then((data) => {
          setIsSigned(true);
          setEmail(data.data.email);
          navigate('/', { replace: true });
        })
        .catch(console.error);
    }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;

    setValue({
      ...values,
      [name]: value,
    });
  }

  function handleSignUp() {
    navigate('/signin', { replace: true });
  }

  function handleSignIn() {
    setIsSigned(true);
    navigate('/movies', { replace: true });
  }

  function handleSignOut() {
    setIsSigned(false);
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
            element={
              <Register
                onSignUp={handleSignUp}
                setAuthCheck={setAuthCheck}
                setEmail={setEmail}
                values={values}
                setValue={setValue}
                onChange={handleChange}
              />
            }
          ></Route>

          <Route
            path="/signin"
            element={
              <Login
                onSignIn={handleSignIn}
                setEmail={setEmail}
                values={values}
                setValue={setValue}
                onChange={handleChange}
              />
            }
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
