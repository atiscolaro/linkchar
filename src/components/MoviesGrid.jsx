import React,{ useContext, useEffect, useState } from "react";
import Card from "./Card"
import { MoviesDataContext } from "../context/MoviesContextProvider";
import Modal from "./Modal";
import { Waypoint } from "react-waypoint";
import { getMovies } from "../service/api";

const MoviesGrid = ({ inputValue }) => {

   const { movies } = useContext(MoviesDataContext)
   const [moviesArray, setMoviesArray] = useState([])
   const [selectedMovie, setSelectedMovie] = useState(null);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
   const [totalPages, setTotalPages] = useState(0);

   useEffect(() => {
      setMoviesArray(movies);
      setCurrentPage(1);
      setTotalPages(movies.total_pages);
   }, [movies]);
   console.log(movies);
   const handleOpenModal = (movieId) => {
      const selectedMovie = moviesArray.results.find((movie) => movie.id === movieId);
      setSelectedMovie(selectedMovie);
      setIsModalOpen(true);
   };

   const handleWaypointEnter = () => {
      if (currentPage < totalPages) {
         fetchNextPage();
      }
   };

   const fetchNextPage = async () => {
      const nextPage = currentPage + 1;
      try {
         const moviesData = await getMovies(inputValue, nextPage);
         setMoviesArray((prevMovies) => ({
            ...prevMovies,
            results: [...prevMovies.results, ...moviesData.results],
         }));
         setCurrentPage(nextPage);
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <>
         {moviesArray.results && moviesArray.results.length > 1 ? (
            <div className=" h-[calc(100vh-4rem)] overflow-auto mx-4 ">
               <div className="grid grid-cols-auto  grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-10 justify-items-center my-20 ">
                  {moviesArray.results.map((movie, index) => (
                     <React.Fragment key={movie.id}>
                        <Card
                           key={movie.id}
                           id={movie.id}
                           title={movie.title}
                           description={movie.overview}
                           imagePath={movie.backdrop_path}
                           imagePath2={movie.poster_path}
                           onOpenModal={handleOpenModal}
                        />
                        {index === moviesArray.results.length - 1 && (
                           <Waypoint onEnter={handleWaypointEnter} />
                        )}
                     </React.Fragment>
                  ))}
               </div>
            </div >
         ) : (
            <div className="flex ml-10 mt-9">
               <h2 className="text-lg">Sorry, we didn't find any movies</h2>
            </div>
         )}
         {isModalOpen && (
            <Modal
               movie={selectedMovie}
               onClose={() => setIsModalOpen(false)}
            />
         )}
      </>
   )
}

export default MoviesGrid;