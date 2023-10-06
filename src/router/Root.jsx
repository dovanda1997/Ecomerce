import React from "react";
import Header from "../component/Header";
import Navigation from "../component/Navigation";
import Fotter from "../component/Fotter";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div>
     <Navigation/>
      <Outlet />
      <Fotter />
    </div>
  );
};

export default Root;
