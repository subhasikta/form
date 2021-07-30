import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage/index";
import LoginPage from "./pages/loginPage/index";
import RegisterPage from "./pages/registerPage/index";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
    </Switch>
  );
}

export default App;