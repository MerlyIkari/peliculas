import React from "react";
import { useLocation } from "react-router-dom";

export default function Error404() {
    let location=useLocation();
    return(
      <React.Fragment>
        <h1>Error 404</h1>
        <p> la ruta que se uso no pertenece : {location.pathname}</p>
      </React.Fragment>
    )
}