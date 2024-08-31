 
import React, { useState } from "react";
import { Movie } from "./data";
import {movies} from "./data";

const App: React.FC = () => {
  const [movieslist, setmovieslist] = useState<Movie[]>(movies);
  const filterByCategory = (cat:string ) =>{
    setmovieslist(movies.filter((movie)=>movie.category === cat))
  }


  return (
    <>
    <div>
      <button
      onClick={()=>setmovieslist(movies)}
      type="button"
      className="btn btn-outline-primary mx-3">
      All
      </button>
      <button 
      onClick={()=>filterByCategory("Action")}
      type="button"
      className="btn btn-outline-primary mx-3">
      Action
      </button>
      <button
      onClick={()=>filterByCategory("Thriller")}
      type="button"
      className="btn btn-outline-primary mx-3"
      >
      Thriller
      </button>
      <button
      onClick={()=>filterByCategory("Animation")}
      type="button"
      className="btn btn-outline-primary mx-3"
      >
      Animation
      </button>
      <button onClick={()=>filterByCategory("Horror")}
       type="button"
       className="btn btn-outline-primary mx-3"
      >
      Horror
      </button>
      <button onClick={()=>filterByCategory("Drama")}
       type="button"
       className="btn btn-outline-primary mx-3"
      >
      Drama
      </button>
      <button onClick={()=>filterByCategory("Sci-Fi")}
       type="button"
       className="btn btn-outline-primary mx-3"
      >
      Sci-Fi
      </button>
      
      
    </div>
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      textAlign: "center",
      width: "1300px",
      margin: "auto",
      marginTop: "1.5rem",
    }}>
      {movieslist.map((movie) => (
          <div key={movie.id} style={{ maxWidth: "280px", textAlign: "center" }}>
            <div style={{ padding: "10px" }} className="hover_effect">
              <img
                src={movie.poster_path}
                alt=""
                style={{
                  width: "200px",
                  height: "280px",
                  borderRadius: "10px",
                  border: "1px solid yellow",
                }}
              />
            </div>
            <h5>{movie.title}</h5>
            <p>{movie.release_date}</p>
          </div>
        ))}
      
    </div>
    </>
  );
};

export default App;
