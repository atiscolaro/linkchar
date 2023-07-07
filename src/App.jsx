import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import MoviesGrid from "./components/MoviesGrid"
import Navbar from "./components/Navbar"
import MoviesContextProvider from "./context/MoviesContextProvider"
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>

        <MoviesContextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />          
            <Route path='search' element={<MoviesGrid />} />
          </Routes>
        </MoviesContextProvider>

      </BrowserRouter>

    </>
  )
}

export default App
