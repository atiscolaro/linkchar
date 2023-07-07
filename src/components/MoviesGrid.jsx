import { useContext, useEffect, useState } from "react";
import Card from "./Card"
import { MoviesContext } from "./Search";

const MoviesGrid = () => {

   const moviesFromContext = useContext(MoviesContext)

   const [movies, setMovies] = useState([])


   useEffect(() => {
      setMovies(moviesFromContext);
   }, [moviesFromContext]);

   console.log('ati', movies);
   return (
      <>
         {movies && (
            <div className=" h-[calc(100vh-4rem)] overflow-auto mx-4 ">
               <div className="grid grid-cols-auto  grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10 justify-items-center my-20 ">
                  {movies.map((movie) => (
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
         )}

         {/* <Card /> */}



         {/* NO BORRAR
         <div className=" h-[calc(100vh-4rem)] overflow-auto mx-4 ">
            <div className="grid grid-cols-auto  grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10 justify-items-center my-20 ">
               {movies?.map((movie) => {
                  return (
                     <Card
                        key={movie.results.id}
                        movieTitle={movie.results.original_title}
                        description={movie.results.overview}
                        imagePath={movie.results.poster_path}
                     />
                  )
               })}
            </div>
         </div> */}

      </>
   )
}

export default MoviesGrid;