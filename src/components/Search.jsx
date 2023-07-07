import { createContext, useState } from "react";
import search from '../assets/icons/search-icon.svg'
import { getMovies } from "../service/api";

export const MoviesContext = createContext();

const Search = ({children}) => {

  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState([])

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    try {
      const fetchMovies = async () => {

        const moviesData = await getMovies(inputValue);
        setMovies(moviesData)

      }
      fetchMovies();
    } catch (error) {
      console(error)
    } finally {

      setInputValue('');
    }
  }

  return (
    <>
      <form
        className="flex justify-center items-center gap-3 "
        onSubmit={onSubmit}
      >
        <input
          type="text"
          placeholder="Buscar"
          value={inputValue}
          onChange={onInputChange}
          className="text-black rounded-lg p-2"
        />
        <img src={search} alt="" />
      </form>
      <MoviesContext.Provider value={movies} >
        {children}
      </MoviesContext.Provider>
    </>
  )
}

export default Search