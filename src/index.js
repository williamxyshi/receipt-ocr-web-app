import {useState} from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import HeaderBar from './components/HeaderBar'
import SignInPage from './components/SignInPage'
import axios from 'axios'
import SignUpPage from './components/SignUpPage';

function App(props) {
  const [jwt, setJwt] = useState([]);
  const [user, setUser] = useState([]);

  const setJwtToken = (token) => {
    axios.defaults.headers.common['token'] = token;
    setJwt(token)
  }
  const setUserModel = (user) => {
    setUser(user)
    console.log(user)
  }


  return (
    <React.StrictMode>
      <Router>
        <HeaderBar/>
        <Switch>
            <Route path = "/signin" component={()=> <SignInPage setJwtToken={setJwtToken} setUserModel={setUserModel}/>} />
            <Route path = "/signup" component={()=> <SignUpPage />} />

            <Route path = "/" component={LandingPage} />
        </Switch>

      </Router>
    </React.StrictMode>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
