import "./App.css";
import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import {useState} from 'react'
function App() {
  const [user,setUser]=useState(null);

  return (
    <div className="app">
      
    {!user?(
    <h1>Login</h1>
    ):(
      <div className="app_body">
        <Router>
          <Sidebar/>
          <Switch>
              <Route path="/rooms/:roomId" component={Chat}/>
              <Route path="/" component={Chat}/>
          </Switch>
        </Router>
   
    </div>
  )
  }
  </div>
    );
}

export default App;
