import React from 'react';
import "./CardPelicula.css";


export default function CardPelicula(props) {
    return (
        <article className="pelicula-card">
            <a href={props.pelicula.officialSite} target="_blank" rel="noreferrer">
               {props.pelicula.image!= null ? (
                   <div>
                       <figure>
                            <img src={props.pelicula.image.medium} alt="Imagen Pelicula" />
                        </figure>
               </div> ): <p> No hay Imagen</p>}
                 <h3>{props.pelicula.name}</h3>
                 <p>{props.pelicula.summary}</p>
                
            </a>
         </article>
    )
}