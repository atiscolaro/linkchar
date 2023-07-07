import { useEffect, useState } from 'react'
import Card from './Card';
import CardNewTrailer from './CardNewTrailer';
import { getNowPlayingMovies } from '../service/api';

const Aside = () => {

  const [selectedOption, setSelectedOption] = useState('')
  const options = ['Today', 'This week', 'This Month', 'This year'];
  const [newTrailersMovies, setNewTrailersMovies] = useState([]);

  const getNewTrailerMovies = async () => {
    const resp = await getNowPlayingMovies();
    setNewTrailersMovies(resp)
  }

  console.log('resp', newTrailersMovies);

  useEffect(() => {
    getNewTrailerMovies()
  }, [])



  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    <aside className='flex flex-col w-[25%] h-[calc(100vh-4rem)] border-r-solid border-r border-r-gray-700 '>
      <div className=' w-full h-[65%]'>
        <div className='flex flex-col justify h-full  justify-between'>
          <div className='flex justify-between mt-5 mx-14'>
            <div>
              <h1 >New Trailers</h1>
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
          <div className='h-full mx-auto flex flex-col gap-[2rem] justify-center'>
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
      <div className='bg-[#1E1E21] w-full h-[35%] pt-5 mb-3 px-14'>
      Favourite genres
      </div>


    </aside>
  )
}

export default Aside