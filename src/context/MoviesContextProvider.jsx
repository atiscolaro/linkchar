import { createContext, useState } from 'react'
export const MoviesDataContext = createContext();

const MoviesContextProvider = ({children}) => {

  const [movies, setMovies] = useState([]);

  return (
    <MoviesDataContext.Provider value={{movies, setMovies}} >
      {children}
    </MoviesDataContext.Provider>
  )
}

export default MoviesContextProvider