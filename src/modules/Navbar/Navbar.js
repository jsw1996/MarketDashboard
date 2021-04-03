
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FundFilled } from '@ant-design/icons';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";


const Navbar = () => {
    return (
        <>
            {/* <h2 style={{ float: "left" }}>Market Dashboard</h2> */}

            <ul id="navbar" >
                {/* <FundFilled style={{ fontSize: '50px', color: '#08c', float: "left" }} /> */}
                <img src="https://www.flaticon.com/svg/vstatic/svg/3799/3799817.svg?token=exp=1617402999~hmac=6f850957dcf5772d5d2da53f5f438042" style={{ height: 40, marginTop: 5 }}></img>
                <li id="link1"><NavLink exact activeClassName="selected" to={"/"}>Search Symbol</NavLink></li>
                <li id="link2"><NavLink exact activeClassName="selected" to={"/market"}>Market</NavLink></li>
            </ul></>
    )

}


export default Navbar;
