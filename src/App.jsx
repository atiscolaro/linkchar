import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import MoviesGrid from "./components/MoviesGrid"
import Navbar from "./components/Navbar"
import MoviesContextProvider from "./context/MoviesContextProvider"
import { BrowserRouter } from 'react-router-dom';
import { useState } from "react"

function App() {

  const [inputValue, setInputValue] = useState('');

  const handleSearch = (value) => {
    setInputValue(value);
  };

  return (
    <>
      <BrowserRouter>
        <MoviesContextProvider>
          <Navbar  onSearch={handleSearch} />
          <Routes>
            <Route path='/' element={<Home />} />          
            <Route path='search' element={<MoviesGrid inputValue={inputValue} />} />
          </Routes>
        </MoviesContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
