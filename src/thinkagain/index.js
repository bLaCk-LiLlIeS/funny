import React from 'react';
import '../SORRY/SORRY STYLING/Sorry.css';
import { Link } from 'react-router-dom';


function ThingAgain() {
  return (
    <div>
        {/* <img src="https://i.pinimg.com/originals/52/c4/d5/52c4d55c27725df1b0a35178ad7cbc08.gif" alt="" /> */}
          <img src="https://i.pinimg.com/originals/ed/fc/d5/edfcd53fb5bd2c649b91caa8057b75b4.gif" alt="" />
        <h1 className='heading'>Thing Again</h1>
        <div className='buttons'>
          <Link to="/cholly">
        <button>Ok I'm Fine</button> 
          </Link>
          <Link to="/cheppu">
        <button>Still No</button>
          </Link>
        </div>
    </div>
  )
}

export default ThingAgain