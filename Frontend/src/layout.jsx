import React from 'react';
import Routes from "./routes";
import Sidebar from './components/sidebar'
import Topbar from './components/topbar';

function Layout(props) {
    return (
        <div>
        <Sidebar/>
            <div>
                <Topbar />
                <Routes />
               
            </div>
        </div>
    );
}

export default Layout;