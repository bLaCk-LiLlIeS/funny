import React from 'react'
import '../SORRY/SORRY STYLING/Sorry.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../App.css';


function Cheppu() {

  const [buttonPosition, setButtonPosition] = useState({ x: 120, y: 600 });

  const handleButtonClick = () => {
    // Generate random coordinates for new position within the window dimensions
    const newX = Math.floor(Math.random() * (window.innerWidth - 100)); // 100 is button width for offset
    const newY = Math.floor(Math.random() * (window.innerHeight - 100)); // 100 is button height for offset

    // Update button position
    setButtonPosition({ x: newX, y: newY });
  };
  
  return (
    <div>
          {/* <img src="https://i.pinimg.com/originals/52/c4/d5/52c4d55c27725df1b0a35178ad7cbc08.gif" alt="" /> */}
          {/* <img src="https://i.pinimg.com/originals/88/2d/1f/882d1fc1b614fbaad2a9967b4e403a7b.gif" alt="" /> */}
          {/* <img src="https://i.pinimg.com/originals/98/e7/c2/98e7c2a96e92a91a86326e6dcb7500cc.gif" alt="" /> */}
          <img src="https://media.tenor.com/oSjblTPZTbIAAAAM/chancla-panda.gif" alt="" />
        <h1 className='heading'>Cheppu thegidhi</h1>
        <h3>Think again</h3>
        <div className='buttons'>
          <Link to="/cholly">
        <button>Chill I'm Fine</button> 
          </Link>
          <button className='cheppuButton'
          style={{ position: 'absolute', top: buttonPosition.y, left: buttonPosition.x }}
          onClick={handleButtonClick}
          >NO</button> 
        
        </div>
    </div>
  )
}

export default Cheppu