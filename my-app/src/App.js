
// import Login from './Login_components/Login';
import './App.css';
import React from 'react';
import Admin from './Managebook/topbar.js';
import Sidebar from './Managebook/Sidebar.js';
// import Material from './Material.js';
import Home from './Managebook/Tabsource.js';
import Login from './Login_components/Login';
import Form from './form.js';
import Sample from './Managebook/topbar.js';

import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Signup from './Login_components/Sign-up';
import Forgot from './Login_components/forgotpassword';

function App()
{
  return(
    <div>
      {/* <BrowserRouter> 
        <Switch>    
            <Route exact path="/">
              <Login/>
            </Route>
            <Route exact path="/signup">
              <Signup/>
            </Route>
            <Route exact path="/forgot">
              <Forgot/>
            </Route>
        </Switch>
      </BrowserRouter> */}
      
      <Home/>
    </div>
  );
}

export default App;
