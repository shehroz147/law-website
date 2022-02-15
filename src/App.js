import logo from "./logo.svg";
import "./App.css";
import NavInfo from "./Components/Navinfo/NavInfo";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import HomePage2 from "./Components/Home/HomePage2";
import LawyersInfo from "./Components/Home/LawyersInfo";
import Services from "./Components/Home/Services";
import Testimonials from "./Components/Home/Testimonials";
import GetInTouch from "./Components/Home/GetInTouch";
import Ads from "./Components/Home/Ads";
import Fotter from "./Components/Home/Fotter.jsx";
import SignUp from "./Components/SignInAndUp/SignUp";
import SignIn from "./Components/SignInAndUp/SignIn";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AskAQuestion from "./Components/Home/AskAQuestion";
import MakeADocument from "./Components/Home/MakeADocument";
import TalkToLawyer from "./Components/Home/TalkToLawyer";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <NavInfo />
            <Home />
            <Services />
            <HomePage2 />
            <LawyersInfo />
            <Testimonials />
            <Ads />
            <Fotter />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/Signin">
            <SignIn />
          </Route>
          <Route exact path="/AskAQuestion">
            <NavInfo />
            <AskAQuestion />
            <Fotter />
          </Route>
          <Route exact path="/makeadocument">
            <NavInfo />
            <MakeADocument />
            <Fotter />
          </Route>
          <Route exact path="/talktolawyer">
            <NavInfo />
            <TalkToLawyer />
            <Fotter />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
