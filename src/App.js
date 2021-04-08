import logo from "./logo.svg";

import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from "./Components/Layout/layout.jsx";
import HomePage from "./Components/HomePage/HomePage.jsx"


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Route  exact path="/" component={HomePage}/>
        <Switch>
         
          <Route path="/dashboard" component={Dashboard} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
