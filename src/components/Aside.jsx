import { useEffect, useState } from 'react'
import CardNewTrailer from './CardNewTrailer';
import { getMoviesListGenres, getNowPlayingMovies } from '../service/api';
import invertedPlay from '../assets/icons/invertedPlay.svg'
import plus from '../assets/icons/plus.svg'

const Aside = () => {

  const [selectedOption, setSelectedOption] = useState('')
  const options = ['Today', 'This week', 'This Month', 'This year'];
  const [newTrailersMovies, setNewTrailersMovies] = useState([]);
  const [genresLabel, setGenresLabel] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([]);
  const colors = ["bg-red-400", "bg-blue-400", "bg-green-400", "bg-purple-400", "bg-yellow-400"];

  const getNewTrailerMovies = async () => {
    const resp = await getNowPlayingMovies();
    setNewTrailersMovies(resp)
  }

  const getGenresList = async () => {
    const resp = await getMoviesListGenres();
    setGenresLabel(resp);
  }

  useEffect(() => {
    getNewTrailerMovies()
    getGenresList()
  }, [])

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleGenreClick = (genre) => {
    if (selectedGenres.length < 5 && !selectedGenres.includes(genre)) {
      setSelectedGenres((prevSelectedGenres) => [...prevSelectedGenres, genre]);
    }
  };

  const handleRemoveGenre = (genre) => {
    setSelectedGenres((prevSelectedGenres) =>
      prevSelectedGenres.filter((selectedGenre) => selectedGenre !== genre)
    );
  };

  return (
    <aside className='flex relative flex-col h-[calc(100vh-4rem)] border-r-solid border-r border-r-gray-700'>
      <div className='my-auto absolute right-[-0.9rem] top-24'>
        <img src={invertedPlay} alt="" className='scale-[1.25]' />
      </div>
      <div className=' h-[55%] overflow-y-auto overflow-x-hidden'>
        <div className='flex flex-col justify h-full  justify-between'>
          <div className='flex justify-between mt-5 mx-14'>
            <div>
              <h1 className='font-bold text-lg'>New Trailers</h1>
            </div>
            <div className='flex gap-2 text-sm justify-center items-center'>
              <p>Sort By</p>
              <select
                value={selectedOption}
                onChange={handleOptionChange}
                className='text-white rounded-md bg-[#17171B]'
              >
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className='h-full w-full mx-2 flex flex-col gap-[2rem] justify-center'>
            {newTrailersMovies &&
              newTrailersMovies.slice(14, 16).map((movie) => {
                return (
                  <CardNewTrailer
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    imagePath={movie.backdrop_path}
                    imagePath2={movie.poster_path}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
      <div className='bg-[#1E1E21] w-full h-[45%] pt-5 mb-3 px-14 font-bold flex flex-col'>
        <div className='text-lg my-2'>
          Favourite genres
        </div>
        <div className='flex gap-3'>
          <img src={plus} alt="" className='scale-[1.25]' />
          <p className='text-sm text-gray-400'>Add your favourite genres (max 5)</p>
        </div>
        <div className="flex  mt-4">
          {genresLabel.data && (
            <ul className="flex gap-3 p-2 whitespace-nowrap overflow-x-auto ">
              {genresLabel.data.genres.map((genre) => {
                return (
                  <div
                    className="bg-orange-400 p-2 rounded-md cursor-pointer"
                    onClick={() => handleGenreClick(genre)}
                    key={genre.id}
                  >
                    <p>{genre.name}</p>
                  </div>
                );
              })}
            </ul>
          )}
        </div>
        <div className='mt-8'>
          {selectedGenres.length > 0 && (
            <div className="mt-2 flex flex-col">
              <div className='mb-3'>
                <h2>Selected Genres:</h2>

              </div>
              <div className='flex gap-3 flex-wrap'>
                {selectedGenres.map((genre, index) => (
                  <div
                    className={`p-2 rounded-md cursor-pointer ${colors[index]}`}
                    onClick={() => handleRemoveGenre(genre)}
                    key={genre.id}
                  >
                    <p>{genre.name}</p>
                  </div>
                ))}

              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}

export default Aside