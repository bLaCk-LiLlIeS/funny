import React from 'react';
import '../SORRY/SORRY STYLING/Sorry.css';
import { Link } from 'react-router-dom';


function ThinkOnce() {
  return (
    <div>
         <img src="https://i.pinimg.com/originals/24/09/0c/24090c90f50d4010d7994e88f33dd660.gif" alt="" />
        <h1 className='heading'>Thing Once</h1>
        <div className='buttons'>
          <Link to="/cholly">
        <button>I'm Fine</button> 
          </Link>
          <Link to="/again">
        <button>Still No</button>
          </Link>
        </div>
    </div>
  )
}

export default ThinkOnce