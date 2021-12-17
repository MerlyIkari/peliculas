import React,{useState,useEffect } from 'react'
import useAxios from '../../hooks/useAxios';
import "./home.css";
import CardPelicula from '../../components/CardPelicula';

export default function Home() {
  const [listPelicula,SetListPelicula]=useState([]);
  const [search, SetSearch]=useState("");
  const {response,error,loading}=useAxios({
    method:"GET",
    url:`search/shows?q=${search}`
});

  const ListaPelicula=(search)=>{
    const {response,error,loading}=useAxios({
        method:"GET",
        url:`search/shows?q=${search}`
    });
    if (error !==""){
        return "Pelicula no encontrada"
    }
    if(loading===false){
    SetListPelicula(response);}
    }
  

  const HandleSumit=(e)=>{
       e.preventDefault();

       if (!search.trim()){
           return "escriba algo por favor"
       }
       ListaPelicula(search.trim().toLowerCase());
  }

 useEffect(()=>{
  
      if (response!=null){
          SetListPelicula(response)
          console.log(response)
      }
      
  },[response])

   return (
        <React.Fragment>
        <main>
        <div className="main-head">
            <form className="search-box" onSubmit={HandleSumit}>

                <input type="search" placeholder="escribrir la película a buscar" required value={search}
                onChange={e=>SetSearch(e.target.value)}
                />
            </form>
        </div>
        {error && (
            <div>
              <p>{error.message}</p>
            </div>
          )}
          {!loading && (
        <div className="pelicula-list">
                {listPelicula.map(item=>(
                        <CardPelicula pelicula={item.show}/>

                    )) }

        </div>
        )}
        </main>
        </React.Fragment>
    )
}
