import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import { getNowPlayingMovies, getPopularMovies, getTopRated } from '../service/api';
import CardContinueWatching from './CardContinueWatching';
import Card from './Card'

const BodyBox = () => {

  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [continueWatchingMovie, setContinueWatchingMovie] = useState([])
  const [popularMovies, setPopularMovies] = useState([])

  const getBannerMovies = async () => {
    const resp = await getTopRated();
    setTopRatedMovies(resp);
  }
  const getContinueWatching = async () => {
    const resp = await getNowPlayingMovies();
    setContinueWatchingMovie(resp);
  }
  const getPopular = async () => {
    const resp = await getPopularMovies();
    setPopularMovies(resp);
  }

  useEffect(() => {
    getBannerMovies()
    getContinueWatching()
    getPopular()
  }, [])

  return (
    <>
      <div className='flex flex-col w-full h-[calc(100vh-5.5rem)] py-12 px-16 overflow-y-auto overflow-hidden'>
        <div>
          {topRatedMovies &&
            topRatedMovies.slice(0, 1).map((movie) => {
              return (
                <Banner
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

        <div className='flex flex-col mt-10'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-3xl pb-6 font-bold'>Continue Watching</h1>
            </div>
            <div>
              <p className='text-xs mb-2 cursor-pointer text-body-secondary text-gray-300 transition-opacity'>
                All movies {'>'}
              </p>
            </div>
          </div>
          <div className='flex gap-10'>
            {continueWatchingMovie &&
              continueWatchingMovie.slice(6, 8).map((movie) => {
                return (
                  <CardContinueWatching
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
        <div className='flex flex-col mt-10'>
          <div className='flex items-center justify-between'>
            <div>
              <h1 className='text-3xl pb-6 font-bold'>Popular Movies</h1>
            </div>
            <div>
              <p className='cursor-pointer text-xs mb-2 text-body-secondary text-gray-300 transition-opacity'>
                All movies {'>'}
              </p>
            </div>
          </div>
          <div className='flex gap-10'>
            {popularMovies &&
              popularMovies.slice(6, 9).map((movie) => {
                return (
                  <Card
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    description={movie.overview}
                    imagePath={movie.backdrop_path}
                    imagePath2={movie.poster_path}
                  />
                )
              })
            }
          </div>

        </div>
      </div>
    </>
  )
}

export default BodyBox