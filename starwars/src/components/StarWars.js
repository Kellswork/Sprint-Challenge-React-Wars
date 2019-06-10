import React from "react";
import './StarWars.css';


function StarWars(props) {
    const {characters} = props
  return (
    <div className='characters'>
      <h1>{characters.name}</h1>
      <ul>
        <li>gender: <span>{characters.gender}</span></li>
        <li>Eye color: <span>{characters.eye_color}</span></li>
        <li>Hair color: <span>{characters.hair_color}</span></li>
        <li>Height: <span>{characters.height}</span></li>
        <li>Skin Color: <span>{characters.skin_color}</span></li>
        <li>Weight: <span>{characters.mass}</span></li>
      </ul>
    </div>
  );
}

export default StarWars;