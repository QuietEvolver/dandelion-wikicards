import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"; //import routers to render to the page via browserRouter, et all
//import Home from "./pages/DeckCards";//lns3-6: renders from given page component found w/in the same ./directory
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import DeckPage from "./pages/DeckPage";
import DeckCards from "./pages/DeckCards";
import Nav from "./components/Nav";
import uiNav from "./components/Nav/uiNav";
//import background from "./images/dnc-youn/bgy4.jpg"

export default function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      </header> */}
      <Router>{/*this is the tag for the JSX known as Router which enlists the all fo the Router files passed along and assigned by express*/}
      <div>
        <Route path="/" component={uiNav} />
        <Switch>
          <Route exact path="/" component={DeckPage} /> {/* renders the home component & saved from ln15; the /renders the homepg when slash/route is hit */}
          <Route exact path="/sign_up" component={SignUp} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/saved" component={Saved} />
          {/* <Route exact path="/cards" component={Home} /> */}
          <Route path="/deck/:name" component={DeckCards} />
          <Route component={NoMatch} />
        </Switch>{/* condidtional stating loosely: depending on which one is hit, this is the one dom will render */}
      </div>
  </Router>{/*browser router tag closes*/}
    </div>
  );
}


