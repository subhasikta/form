import React, { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import HomePage from "./pages/homePage/index";
import LoginPage from "./pages/loginPage/index";
import RegisterPage from "./pages/registerPage/index";
import ErrorPage from "./pages/errorPage/index";

function App() {

  const history = useHistory();

  useEffect(() => {
    const checkLoginUser = () => {
      let token = window.localStorage.getItem('AuthToken');
      if (!token) {
        window.localStorage.setItem('AuthToken', '');
      }
    }
    checkLoginUser();
  }, [history])

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/error" component={ErrorPage} />
    </Switch>
  );
}

export default App;