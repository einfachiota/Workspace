import React from 'react';
import { Link } from 'react-router-dom'
import { SidebarItemsMain, SidebarItemsResources } from './sidebaritems'
import '../css/sidebar.css'


function Navbar() {


        return(

            <div id="mySidebar" className="sidebar">
            <div className="sidebarTitle">Main</div>
            <br />
                {
                    SidebarItemsMain.map(item=> (
                     
                     <Link to={item.route}> 

                        <div key={item.name}>
                            <div className="sidebarItem">{[item.icon, item.name]}</div>
                        </div>

                     </Link>
                     
                    ))
                }
            <br />
            <div className="sidebarTitle">Resources</div>
            <br />
                {
                    SidebarItemsResources.map(item=> (
                     
                     <Link to={item.route}> 

                        <div key={item.name}>
                                <div className="sidebarItem" onClick={() => window.location.href = `${item.link}`}>{[item.icon, item.name]}</div>
                        </div>

                     </Link>
                     
                    ))
                }
            </div>
        )
    }


export default Navbar