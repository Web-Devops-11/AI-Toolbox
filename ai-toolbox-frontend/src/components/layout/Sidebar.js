import React from 'react';
import { Link } from 'react-router-dom';

function SideBar() {
    return <>
    <list>
        <item link to="/">Home</item>
        <item link to="/about">About</item>
        <item link to="/contact">Contact</item>
    </list> 
    </>    
}

export default SideBar;