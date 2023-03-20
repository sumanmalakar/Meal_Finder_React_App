/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { Link } from "react-router-dom";




export default function Slider({ recipe }) {

  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const divStyle = {
    color: 'blue',
    cursor: 'pointer',
    width:'100%'
  };

  const sliderr = (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={1000}
    // buttons = {true}
    >
      {recipe.map((recipe) => {
        return (
         
          // <Link to={"/recipe/" + recipe.idMeal} data-src={recipe.strMealThumb}  />
<>
          <Link to={"/recipe/" + recipe.idMeal} style={divStyle} > 
          <img src={recipe.strMealThumb}  alt={recipe.strMeal}  />  
        </Link>
          
        </>
        )
      })}

    </AutoplaySlider>
  )

  return (<>

    {sliderr}
  </>
  )
}