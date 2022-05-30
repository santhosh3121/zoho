import React from "react";
import './Sidebar.css';
import BookIcon from '@mui/icons-material/Book';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';
import AddIcon from '@mui/icons-material/Add';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { useState } from "react";
import { Link } from "react-router-dom";

function sidebar()
{
    return(

        <div className="sidebar">
           <div className="sidebarwrapper">
                <div className="sidebarmenu">
                    <h4 className="titlesidebar">Dashboard</h4>
                     
                    <ul className="sidebarlist">
                    <Link to="/book-status" className="link">
                        <li className="sidebarlistitem active">
                                 <StackedLineChartIcon className="sidebaricon"/>
                            Book status
                        </li>
                        </Link>
                        
                        <li className="sidebarlistitem">                          
                               <BookIcon className="sidebaricon"/>     
                                  Manage Books
                        </li>
                        <Link to="/add-book" className="link">
                            <li className="sidebarlistitem">
                                <AddIcon className="sidebaricon"/>
                                Add books
                            </li>
                        </Link>
                    </ul>
                    <h4 className="titlesidebar">Users</h4>
                    <ul className="sidebarlist">
                        <li className="sidebarlistitem">
                            <PersonOutlineIcon className="sidebaricon"/>
                            Add users
                        </li>
                        <li className="sidebarlistitem">
                            <CardMembershipIcon className="sidebaricon"/>
                            Membership
                        </li>
                        <li className="sidebarlistitem">
                            <ManageAccountsIcon className="sidebaricon"/>
                            Manage users
                        </li>
                    </ul>
                </div>
           </div>
        </div>

    );
}
export default sidebar;