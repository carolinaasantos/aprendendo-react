import React from "react";
import Home from '../pages/home';
import Login from "../pages/login";
import Register from "../pages/register";
import LoggedHome from "../pages/logged_home";
import RegisteredHome from "../pages/registered_home";
import { Route, Routes } from "react-router-dom";

//BrowserRouter: informa à aplicação o roteamento de componentes (<Route>)
//<Route>: componente que associa rota ao componente
//component - rece o componente que precisa ser exibido ao acessar a rota. Parâmetros:
//path - caminho na URL que precisa ser acessado para mostrar o componente
//exact - determina qual componente vai ser exibido apenas se for igual ""

const AppRoutes = () => {
   return(
       <Routes>
           <Route element = {<Home />}  path="/" />
           <Route element  = {<Login />}  path="/login" />
           <Route element  = {<Register />}  path="/register" />
           <Route element  = {<LoggedHome />}  path="/logged-home" />
           <Route element  = {<RegisteredHome />}  path="/registered-home" />
       </Routes>
   )
}

export default AppRoutes;