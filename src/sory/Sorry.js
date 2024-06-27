import React from 'react';
import '../SORRY/SORRY STYLING/Sorry.css';
import { Link } from 'react-router-dom';

function Sorry() {
  return (
    <div>
        <img src="https://i.pinimg.com/originals/b5/9e/c4/b59ec4cdd3e542541ec5c5234b92a9b6.gif" alt="" />
        <h1 className='heading'>Are You Fine</h1>
        <div className='buttons'>
       <Link to="/once">
       <button>
       No
       </button>
       </Link >
       <Link to="/cholly">
        <button>Yes</button>
       </Link>
        </div>
    </div>
  )
}

export default Sorry