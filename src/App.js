import "./App.css";
import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
function App() {
  return (
    <div className="app">
        <div className="app_body">
          <Router>
            <Sidebar/>
            <Switch>
                <Route path="/rooms/:roomId" component={Chat}/>
                <Route path="/" component={Chat}/>
            </Switch>
          </Router>
            <Chat/>
        </div>
    </div>
  );
}

export default App;
