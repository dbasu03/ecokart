/*

import React from 'react';
import './Hero.css';
import pic1 from '../Assets/pic1.jpg';

const Hero = () => {
  return (
    <div class Name='hero'>

        <div className="hero-left">
                    <p>Karvat aims to create an impactful change among the consumers through the hands of the consumers themselves.
                        We aim to provide the one-stop platform for your daily essentials by partnering up environmental friendly, 
                        ethical, recycled and degradable disposable manufacturing businesses with largescale consumer market. Our 
                        aim is to reach the Indian and global market and educate the people about waste management and climate change 
                        impact while making better alternatives accessible for them to choose from. We also aim in helping our consumers
                        to partner up with their local recycling units to foster better waste management, provide a platform for 
                        sustainable businesses to grow  adn generate more employment and create awareness around sustainability and 
                        recycling.
                    </p>
            <div>
                <div className="hand-hand-icon">
                    
                    
                </div>
                <div className="hero-right">
                    <img src={pic1} alt="" />
                </div>
                <div className="hero-latest-btn">
                    
                    
                </div>
                
                
            </div>
            
        </div>
        
    </div>
  );
};

export default Hero;

*/
/*
import React from 'react';
import './Hero.css';
import pic1 from '../Assets/pic1.jpg';

const Hero = () => {
  return (
    <div className='hero'>

        <div className="hero-left">
            <p>Karvat aims to create an impactful change among the consumers through the hands of the consumers themselves.
                We aim to provide the one-stop platform for your daily essentials by partnering up environmental friendly, 
                ethical, recycled and degradable disposable manufacturing businesses with largescale consumer market. Our 
                aim is to reach the Indian and global market and educate the people about waste management and climate change 
                impact while making better alternatives accessible for them to choose from. We also aim in helping our consumers
                to partner up with their local recycling units to foster better waste management, provide a platform for 
                sustainable businesses to grow and generate more employment and create awareness around sustainability and 
                recycling.
            </p>
            <div className="hand-hand-icon"></div>
            <div className="hero-right">
                <img src={pic1} alt="" />
            </div>
            <div className="hero-latest-btn"></div>
        </div>
        
    </div>
  );
};

export default Hero;
*/

import React, { useState, useEffect } from 'react';
import './Hero.css';
import image1 from '../Assets/hero1.jpg';
import image2 from '../Assets/hero2.jpg';
import image3 from '../Assets/hero3.jpeg';
import image4 from '../Assets/hero4.jpg';
import image5 from '../Assets/hero8.jpg';

const images = [image1, image2, image3, image4, image5];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);  

    

    return (
        <div className='hero' style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
            <div className="hero-content">
                <p>Greenstop is a platform that aims to bring together sustainable businesses with consumers. We
                     provide a one-stop-shop for people who want to make conscious lifestyle choices that are 
                     affordable, durable, stylish, and ethical. Our platform promotes eco-friendly, organic, and 
                     recycled products that cover your daily needs from groceries to clothing, kitchen to dining,
                      footwear to accessories, stationary to even energy needs
                </p>
            </div>
        </div>
    );
};

export default Hero;


