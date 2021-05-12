import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { FindMain, MakeMain, MyMain } from "./components/Main";
import { Signup } from "./components/Signup";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/find" component={FindMain} />
        <Route exact path="/mine" component={MyMain} />
        <Route exact path="/make" component={MakeMain} />
      </Router>
    </>
  );
}

export default App;
