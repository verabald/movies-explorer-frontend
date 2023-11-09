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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import mainApi from '../../utils/MainApi';

function App() {
  const navigate = useNavigate();

  const [currentToken, setCurrentToken] = useState(
    localStorage.getItem('token')
  );

  const [currentUser, setCurrentUser] = useState({});
  const [isMoviesSaved, setIsMoviesSaved] = useState([]);
  const [isSigned, setIsSigned] = useState(false);
  const [authCheck, setAuthCheck] = useState(false);
  const [email, setEmail] = useState('');

  const [statusEdit, setStatusEdit] = useState({});

  useEffect(() => {
    checkToken();
  }, []);

  useEffect(() => {
    mainApi
      .getSavedMovies()
      .then((res) => {
        setIsMoviesSaved(res.filter((i) => i.owner === currentUser._id));
      })
      .catch(console.error);
  }, [currentUser]);

  function checkToken() {
    if (currentToken) {
      console.log(currentToken);
      mainApi
        .checkToken(currentToken)
        .then((res) => {
          setIsSigned(true);
          setCurrentUser(res.data);
          setEmail(res.data.email);
          navigate({ replace: true });
        })
        .catch(console.error);
    }
  }

  function handleProfileEdit(user) {
    return mainApi
      .editProfile(user)
      .then((res) => {
        setCurrentUser(res.data);
        navigate('/profile', { replace: true });
        setStatusEdit({
          text: 'Профиль обновлён',
        });
      })
      .catch((err) => {
        if (err === 'Что-то пошло не так: 409') {
          setStatusEdit({
            text: 'Пользователь с таким email уже существует',
          });
        } else {
          setStatusEdit({
            text: 'При обновлении профиля произошла ошибка',
          });
        }
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
    localStorage.clear();
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
              />
            }
          ></Route>

          <Route
            path="/signin"
            element={
              <Login
                onSignIn={handleSignIn}
                setEmail={setEmail}
              />
            }
          ></Route>

          <Route
            path="/movies"
            element={
              <>
                <Header isSigned={isSigned} />
                <ProtectedRoute element={Movies} isSigned={isSigned} />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/saved-movies"
            element={
              <>
                <Header isSigned={isSigned} />
                <ProtectedRoute element={SavedMovies} isSigned={isSigned} />
                <Footer />
              </>
            }
          ></Route>

          <Route
            path="/profile"
            element={
              <ProtectedRoute
                element={Profile}
                isSigned={isSigned}
                onSignOut={handleSignOut}
                onEdit={handleProfileEdit}
                statusEdit={statusEdit}
              />
            }
          ></Route>
          <Route
            element={
              isSigned ? <Navigate to="/movies" /> : <Navigate to="/signin" />
            }
          />
          <Route path="*" element={<Navigate to="/pagenotfound" replace />} />
          <Route path="/pagenotfound" element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
