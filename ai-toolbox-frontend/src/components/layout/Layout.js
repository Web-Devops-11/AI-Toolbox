import React from 'react';
import Header from './Header';
import SideBar from './SideBar';
import SearchBar from './SearchBar';
import { Outlet } from 'react-router-dom';

function Layout() {
    return <>
    <Header/>
    <SideBar/>
    <SearchBar/>
    <Outlet/>
    </>    
}

export default Layout;