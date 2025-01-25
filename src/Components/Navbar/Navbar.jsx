/*

import React, { useState } from 'react';
import './Navbar.css';

import logo from '../Assets/logo2.png';
import cart_icon2 from '../Assets/cart_icon2.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu,setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>KARVAT</p>
        </div>
        <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link to = '/'> Shop </Link> {menu==="shop"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("grocery")}}><Link to = '/grocery'> Grocery </Link>  {menu==="grocery"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("items")}}><Link to = '/items'> Items </Link>  {menu==="items"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu("fashion")}}><Link to = '/fashion'> Fashion </Link>  {menu==="fashion"?<hr/>:<></>} </li>
        </ul>
        <div className="nav-login-cart">
            <Link to = '/login'> <button>Login</button> </Link>
            <Link to ='/cart'> <img src={cart_icon2} alt="" /></Link>
        </div>
        
    </div>
  );
};

export default Navbar;

*/
/*
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo2.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>KARVAT</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}>
                    <Link to='/'> Shop </Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("grocery") }}>
                    <Link to='/grocery'> Grocery </Link>
                    {menu === "grocery" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("items") }}>
                    <Link to='/items'> Items </Link>
                    {menu === "items" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("fashion") }}>
                    <Link to='/fashion'> Fashion </Link>
                    {menu === "fashion" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login">
                <Link to='/login'>
                    <button className="glow-btn">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
*/

/*
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo2.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>KARVAT</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => handleMenuClick("shop")}>
                    <Link to='/'> Shop </Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => handleMenuClick("grocery")}>
                    <Link to='/grocery'> Grocery </Link>
                    {menu === "grocery" ? <hr /> : <></>}
                </li>
                <li onClick={() => handleMenuClick("items")}>
                    <Link to='/items'> Items </Link>
                    {menu === "items" ? <hr /> : <></>}
                </li>
                <li onClick={() => handleMenuClick("fashion")}>
                    <Link to='/fashion'> Fashion </Link>
                    {menu === "fashion" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login">
                <Link to='/login'>
                    <button className="glow-btn">Login</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
*/
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo4.png';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const navigate = useNavigate(); // Define navigate function

    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
        // Redirect to the corresponding page when a menu item is clicked
        switch (menuItem) {
            case "shop":
                navigate('/');
                break;
            case "grocery":
                navigate('/grocery');
                break;
            case "items":
                navigate('/items');
                break;
            case "fashion":
                navigate('/fashion');
                break;
            default:
                navigate('/');
        }
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>  Greenstop </p>
            </div>

            <ul className="nav-menu">
                <li onClick={() => handleMenuClick("shop")}>
                    <Link to='/'> Home </Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => handleMenuClick("grocery")}>
                    <Link to='/grocery'> Grocery </Link>
                    {menu === "grocery" ? <hr /> : <></>}
                </li>
                <li onClick={() => handleMenuClick("items")}>
                    <Link to='/items'> Fashion </Link>
                    {menu === "items" ? <hr /> : <></>}
                </li>
                <li onClick={() => handleMenuClick("fashion")}>
                    <Link to='/fashion'> Living </Link>
                    {menu === "fashion" ? <hr /> : <></>}
                </li>


            </ul>
            <div className="nav-login">
                <Link to='/login'>
                    <button className="glow-btn">Join Us</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
