import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import Searched from './Searched'
import RecipeId from './RecipeId';
import {Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

export default function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>

      <Routes  location={location} key = {location.pathname}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cuisine/:type" element={<Cuisine />} />
        <Route exact path="/searched/:search" element={<Searched />} />
        <Route exact path="/recipe/:name" element={<RecipeId />} />
      </Routes>
   
    </AnimatePresence>
  );
}
 