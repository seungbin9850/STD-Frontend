import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Router>
    </>
  );
}

export default App;
