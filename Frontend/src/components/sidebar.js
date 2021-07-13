import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import SidebarItems from './sidebaritems'
import '../css/sidebar.css'


function Navbar(props, {defaultActive}) {
    //If no active prop is passed, use `1` instead
    const [activeIndex, setActiveIndex] = useState(defaultActive || 1);


        return(

            <div id="mySidebar" className="sidebar">
                {
                    SidebarItems.map(item=> (
                     
                     <Link to={item.route}> 

                        <div key={item.name}>
                            <p>{item.name}</p>
                        </div>

                     </Link>
                     
                    ))
                }
            </div>
        )
    }


export default Navbar