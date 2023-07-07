import { useContext, useEffect, useState } from "react";
import Card from "./Card"
import { MoviesDataContext } from "../context/MoviesContextProvider";

const MoviesGrid = () => {

   const {movies} = useContext(MoviesDataContext)
   const [moviesArray, setMoviesArray] = useState([])

   useEffect(() => {
      setMoviesArray(movies);
   }, [movies]);

   return (
      <>
         {moviesArray && moviesArray.length > 1 ? (
            <div className=" h-[calc(100vh-4rem)] overflow-auto mx-4 ">
               <div className="grid grid-cols-auto  grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10 justify-items-center my-20 ">
                  {moviesArray.map((movie) => (
                     <Card
                        key={movie.id}
                        id={movie.id}
                        title={movie.title}
                        description={movie.overview}
                        imagePath={movie.backdrop_path}
                        imagePath2={movie.poster_path}
                     />
                  ))}
               </div>
            </div>
         ) :
         <div className="flex ml-10 mt-9">
            <h2 className="text-lg">No se encontro ninguna película</h2>

         </div>
         }
      </>
   )
}

export default MoviesGrid;