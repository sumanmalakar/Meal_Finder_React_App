
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

export default function Cuisine() {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`
    );

    const recipe = await api.json();

    console.log(recipe.meals);
    setCuisine(recipe.meals);
  };

  useEffect(() => {
    console.log(params.type);
    getCuisine(params.type);
  }, [params.type]);

  return (
    <>
        {/* <h1>{params.type} Food</h1> */}
      <Grid 
      
      >
        {cuisine.map((item) => {
          return (
            <Link to={"/recipe/" +item.idMeal}>
              <Card key={item.idMeal}>
                <img src={item.strMealThumb}
                alt = {item.strMeal}
                />
                <h4>{item.strMeal}</h4>
              </Card>
            </Link>
          );
        })}
      </Grid>
    </>
  );
}
const Grid = styled(motion.div)`
margin-top:1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 2rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
    color:white;
  }
`;
