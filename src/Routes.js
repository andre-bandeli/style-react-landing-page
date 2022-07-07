import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import Category from "./components/categorias/Category";


const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Category }  path="/categories" exact />
           
       </BrowserRouter>
   )
}

export default Routes;