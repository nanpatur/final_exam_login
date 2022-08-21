import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import SuccessPage from "./pages/Success";

function App() {
  return (
    <div className='container d-flex align-items-center' style={{ height: "100vh" }}>
      <Router>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/success">
          <SuccessPage />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
