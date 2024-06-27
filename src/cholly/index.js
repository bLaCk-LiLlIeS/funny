import React from 'react';
import { Link } from 'react-router-dom';
// import sound from "../SORRY/sound.mp3";
// import sound01 from "../SORRY/sound01.mp3";
// import tom from "../SORRY/tom.mp3";
import tom01 from "../SORRY/tom01.mp3"

function Chooly() {

  function play(){
    new Audio(tom01).play()
  }

  return (
    <div>
        <img src="https://media.tenor.com/fOgB_waLqowAAAAj/boy-girl.gif" alt="" />
        <h1 className='heading'>Sorry</h1>
        <div className='buttons'>
          <Link to="">
        <button onClick={play}>OK</button> 
          </Link>
          <Link to="/know">
        <button>It's not your Fault</button>
          </Link>
        </div>
    </div>
  )
}

export default Chooly