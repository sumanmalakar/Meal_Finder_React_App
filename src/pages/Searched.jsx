import { useEffect, useState } from "react";
import {useParams} from 'react-router-dom';
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Search() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
let params = useParams();
 

  const getSearched = async (name) => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );

    const recipe = await api.json();

    console.log(recipe.meals);
    
    if(recipe.meals == null){
       console.log("No element found");
    }else{
      setSearchedRecipes(recipe.meals);
    }
  };


   useEffect(() => {
     getSearched(params.search);
   }, [params.search]);

  return (
   
<Grid>
{searchedRecipes.map((item)=>{
            return (
              <Link to={"/recipe/" + item.idMeal}>
                <Card key={item.idMeal}>
                  <img src={item.strMealThumb} />
                  <h4>{item.strMeal}</h4>
                </Card>
              </Link>
            );
      })}
    </Grid>
    
      
  );
}


const Grid = styled.div`
  margin-top: 1rem;
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
