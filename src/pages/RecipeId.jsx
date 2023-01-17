import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import React from 'react'

export default function RecipeId() {
  let params = useParams();

  const [details, setDetails] = useState([])
 const [activeTab, setActiveTab] = useState("instructions")
 
    //  useEffect(() => {
    //    return () => {
    //      fetchDetails();
    //    };
    //  }, [params.name]);
     useEffect(() => {
   
      fetchDetails();
     }, []);
   

 const fetchDetails = async () => {
   const api = await fetch(
     `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.name}`)
     
    const data = await api.json();
    
    console.log(data.meals);
    setDetails(data.meals[0]);
  };



  return (
    <DetailWrapper >
      <div key = {details.idMeal}>
        <h4>{details.strMeal}</h4>
        <h4>Location - {details.strArea}</h4>
        <img src={details.strMealThumb}
        alt = {details.strMeal} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>

        {activeTab === "ingredients" ? (
          <ul>
            <li>
              {details.strIngredient1} - {details.strMeasure1}
            </li>
            <li>
              {details.strIngredient2} - {details.strMeasure2}
            </li>
            <li>
              {details.strIngredient3} - {details.strMeasure3}
            </li>
            <li>
              {details.strIngredient4} - {details.strMeasure4}
            </li>
            <li>
              {details.strIngredient5} - {details.strMeasure5}
            </li>
            
          </ul>
        ) : (
          <div>
            <h4>{details.strInstructions}</h4>
          </div>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color:white
  }
  h2 {
    margin-bottom: 2rem;
    color:white;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  h4{
    text-align:center;
    font-weight:bold;
    font-size:1.4em;
    color:white;
    font-family:sans-sarif;

  }
  ul {
    margin-top: 1rem;
  }
  img{
    height:290px;
    width:290px;
  }
`;

const Button = styled.button`
padding: 1rem 2rem;
color:#313121;
background:white;
border:2px solid black;
margin-right:2rem;
font-weight:600;
`
const Info = styled.div`
margin-left: 10rem;
`