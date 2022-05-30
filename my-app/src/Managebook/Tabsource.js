import React from 'react';
import Admin from './topbar.js';
import Sidebar from './Sidebar.js';
import Book from './Book.js';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom';
import './Tabsource.css';
import Addbook from './Addbook.js';

function Tab()
{
   return(
  
    <Router>  
     <Admin/>     
       <div className="container">
       <Sidebar/>
         <Switch>
            <Route exact path="/book-status">              
               <Book/>
            </Route>
            <Route exact path="/add-book">              
               <Addbook/>
            </Route>
         </Switch>
       </div>

    </Router>

   );
}

export default Tab;