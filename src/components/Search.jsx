import { createContext, useContext, useState } from "react";
import search from '../assets/icons/search-icon.svg'
import { getMovies } from "../service/api";
import { MoviesDataContext } from "../context/MoviesContextProvider";
import { useNavigate } from "react-router-dom";

// export const MoviesContext = createContext();

const Search = () => {
  const navigate = useNavigate();
  const {movies, setMovies} = useContext(MoviesDataContext);

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();

    try {
      const fetchMovies = async () => {
        const moviesData = await getMovies(inputValue);
        setMovies(moviesData)
        navigate('/search');
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
    </>
  )
}

export default Search