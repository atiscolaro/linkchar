import React from 'react'
import CerrarBtn from '../assets/icons/cerrar.svg'
import { parseISO, format } from 'date-fns';

const Modal = ({ onClose, movie }) => {

  const releaseDate = parseISO(movie.release_date);
  const formattedDate = format(releaseDate, 'dd/MM/yy');
  const formattedVoteAverage = movie.vote_average.toFixed(2);

  const ocultarModal = () => {
    onClose()
  }
  return (
    <>
      <div className='modal  flex justify-center items-center gap-7'>
        <div className='flex flex-col  border-solid border border-white p-9 text-xl'>
          <p><span className='font-bold text-orange-300'>Movie id: </span>{movie.id}</p>
          <p><span className='font-bold text-orange-300'>Movie <title></title>: </span>{movie.title}</p>
          <p><span className='font-bold text-orange-300'>Original title: </span>{movie.original_title}</p>
          <p><span className='font-bold text-orange-300'>Average vote: </span>{formattedVoteAverage}</p>
          <p><span className='font-bold text-orange-300'>Release date: </span>{formattedDate}</p>
        </div>
        <div className='cerrar-modal w-[6rem] h-[6rem]'>
          <img
            src={CerrarBtn}
            alt="cerrar modal"
            onClick={ocultarModal}
            className='scale-50'
          />
        </div>
      </div>
    </>
  )
}

export default Modal