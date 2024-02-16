//this is the navbar for the fashion category


import React, { useState } from 'react';
import './Popular2.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import image from '../Assets/home.jpg';

const Popular2 = () => {
    const [menu, setMenu] = useState("home"); // Set default menu to "home"
    const navigate = useNavigate(); // Define navigate function

    const handleMenuClick = (menuItem) => {
        setMenu(menuItem);
        // Redirect to the corresponding page when a menu item is clicked
        switch (menuItem) {
            case "home":
                navigate('/new');
                break;
            case "kitchen":
                navigate('/new');
                break;
            case "floor":
                navigate('/new');
                break;
            case "living":
                navigate('/new');
                break;
                case "stationary":
                navigate('/new');
                break;
                case "cleaning":
                navigate('/new');
                break;
                case "gifting":
                navigate('/new');
                break;
            default:
                navigate('/');
        }
    };

    return (
        <div className='container'>
            <div className='navbar'>
                <ul className="nav-menu">
                    <li onClick={() => handleMenuClick("home")}>
                        <div className="card">
                            <img src={image} alt="Home" />
                            <Link to='/new'> Home </Link>
                        </div>
                    </li>
                    <li onClick={() => handleMenuClick("kitchen")}>
                        <div className="card">
                            <img src={image} alt="Kitchen" />
                            <Link to='/new'> Kitchen </Link>
                        </div>
                    </li>
                    <li onClick={() => handleMenuClick("floor")}>
                        <div className="card">
                            <img src={image} alt="Floor" />
                            <Link to='/new'> Floor </Link>
                        </div>
                    </li>
                    <li onClick={() => handleMenuClick("living")}>
                        <div className="card">
                            <img src={image} alt="Living" />
                            <Link to='/new'> Living </Link>
                        </div>
                    </li>
                    <li onClick={() => handleMenuClick("stationary")}>
                        <div className="card">
                            <img src={image} alt="Living" />
                            <Link to='/new'> Living </Link>
                        </div>
                    </li>
                    <li onClick={() => handleMenuClick("cleaning")}>
                        <div className="card">
                            <img src={image} alt="Living" />
                            <Link to='/new'> Living </Link>
                        </div>
                    </li>
                    <li onClick={() => handleMenuClick("gifting")}>
                        <div className="card">
                            <img src={image} alt="Living" />
                            <Link to='/new'> Living </Link>
                        </div>
                    </li>
                </ul>
            </div>
           {/* <div className="nav-login">
                <Link to='/login'>
                    <button className="glow-btn">Join Us</button>
                </Link>
    </div>*/}
        </div>
    );
};

export default Popular2;