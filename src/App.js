import "./App.css";
import React from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import {useState} from 'react'
import Login from './Login'
import { LoginContext } from "./LoginContext";
function App() {
  const [user,setUser]=useState(null);

  return (
    <div className="app">
    <LoginContext.Provider value={{user,setUser}}>
    {!user?(
      <Login/>
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
    </LoginContext.Provider>    
  </div>
    );
}

export default App;
