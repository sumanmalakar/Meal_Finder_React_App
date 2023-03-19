import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import Slider from "./Slider";

// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

export default function Popular() {
 
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const searchItem = ""; 

      const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchItem}`
      );

      const data = await api.json();

      console.log(data.meals);
      setPopular(data.meals);

      }




  return (
    <>
        {/* <Wrapper>
          <h3 style={{color:"white"}}>Popular Picks</h3>

          <Splide 
          options = {{
            perPage:4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "2rem"
          }}
           >
      {popular.map((recipe) => {
        return (
          <>
            <SplideSlide key={recipe.idMeal}>
              <Card>
                <Link to={"/recipe/" + recipe.idMeal}> 
                  <p>{recipe.strMeal}</p>
                  <img src={recipe.strMealThumb} 
                  alt={recipe.strMeal} />
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          </>
        ); }
                
                )}
                </Splide>
              </Wrapper> */}
              
              <Slider recipe = {popular} />

               {/* {popular.map((recipe) => {
        return (
            <Slider key={recipe.idMeal} recipe = {recipe} />
        
        )})  } */}

      </>
  )
}
    

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position : relative;
  cursor:pointer;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width:100%;
    height: 100%;
    object-fit: cover;

  }
  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color:white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display:flex;
    justify-content: center;
    align-items: center;
  }
`;
 
const Gradient = styled.div`
z-index:3;
position:absolute;
width:100%;
height:100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`