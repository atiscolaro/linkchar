import Home from "./components/Home"
import MoviesGrid from "./components/MoviesGrid"
import Navbar from "./components/Navbar"
import MoviesContextProvider from "./context/MoviesContextProvider"

function App() {

  return (
    <>

      <MoviesContextProvider>
        <Navbar />
        <Home />
        {/* <MoviesGrid /> */}
      </MoviesContextProvider>

    </>
  )
}

export default App
