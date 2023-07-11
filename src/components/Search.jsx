import { useContext, useState } from "react";
import search from '../assets/icons/search-icon.svg'
import { getMovies } from "../service/api";
import { MoviesDataContext } from "../context/MoviesContextProvider";
import { useNavigate } from "react-router-dom";

const Search = ({ onSearch }) => {
  const navigate = useNavigate();
  const {movies, setMovies} = useContext(MoviesDataContext);
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    onSearch(inputValue);
    try {
      const fetchMovies = async () => {
        const moviesData = await getMovies(inputValue, 1);
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
          placeholder="Search"
          value={inputValue}
          onChange={onInputChange}
          className="text-black rounded-lg p-2"
        />
        <img src={search} alt=""  className="scale-125 ml-3"/>
      </form>
    </>
  )
}

export default Search