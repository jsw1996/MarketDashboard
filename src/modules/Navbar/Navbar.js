
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FundFilled } from '@ant-design/icons';
import icon from "../../assets/icon.svg"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";


const MyNavbar = () => {
    return (
        // <>
        //     {/* <h2 style={{ float: "left" }}>Market Dashboard</h2> */}

        //     <ul id="navbar" >
        //         {/* <FundFilled style={{ fontSize: '50px', color: '#08c', float: "left" }} /> */}
        //         <img src={icon} color={"red"} style={{ height: 40, marginTop: 5 }}></img>
        //         <li id="link1"><NavLink exact activeClassName="selected" to={"/"}>Search Symbol</NavLink></li>
        //         <li id="link2"><NavLink exact activeClassName="selected" to={"/market"}>Market</NavLink></li>
        //     </ul></>

        <Navbar id="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="#home" style={{ color: "white", fontWeight: "bold" }}>  <img src={icon} color={"red"} style={{ height: 40, marginTop: 5 }}></img>{"  "}Market Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

                <Nav activeKey={window.location.pathname} >
                    {/* <NavLink exact activeClassName="selected" to={"/"}>Search Symbol</NavLink>
                    <Nav.Link >
                        <NavLink exact activeClassName="selected" to={"/market"}>Market</NavLink>      </Nav.Link> */}



                    <Nav.Link href="/">Search Symbol</Nav.Link>
                    <Nav.Link href="/market">Market</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}


export default MyNavbar;
