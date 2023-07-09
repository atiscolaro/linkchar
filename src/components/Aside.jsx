import { useEffect, useState } from 'react'
import CardNewTrailer from './CardNewTrailer';
import { getNowPlayingMovies } from '../service/api';
import invertedPlay from '../assets/icons/invertedPlay.svg'

const Aside = () => {

  const [selectedOption, setSelectedOption] = useState('')
  const options = ['Today', 'This week', 'This Month', 'This year'];
  const [newTrailersMovies, setNewTrailersMovies] = useState([]);

  const getNewTrailerMovies = async () => {
    const resp = await getNowPlayingMovies();
    setNewTrailersMovies(resp)
  }

  useEffect(() => {
    getNewTrailerMovies()
  }, [])

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <aside className='flex relative flex-col h-[calc(100vh-4rem)] border-r-solid border-r border-r-gray-700 '>
      <div className='my-auto absolute right-[-0.9rem] top-24'>
        <img src={invertedPlay} alt="" className='scale-[1.25]'/>
      </div>
      <div className=' h-[55%] overflow-y-auto'>
        <div className='flex flex-col justify h-full  justify-between'>
          <div className='flex justify-between mt-5 mx-14'>
            <div>
              <h1 className='font-bold'>New Trailers</h1>
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
      <div className='bg-[#1E1E21] w-full h-[45%] pt-5 mb-3 px-14 font-bold'>
        Favourite genres
      </div>

    </aside>
  )
}

export default Aside