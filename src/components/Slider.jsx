import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { Link } from "react-router-dom";


export default function Slider({recipe}){

  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const divStyle = {
    color: 'blue',
    cursor:'pointer'
  };
  
  const sliderr = (
    <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={100}
    // buttons = {true}
    >
          {recipe.map((recipe) => {
        return (   
            <div data-src={recipe.strMealThumb} key={recipe.idMeal} />
        
        )})  }

  </AutoplaySlider>
  )

return( <>

{sliderr}
</>
)
}