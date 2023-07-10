import React from 'react'
import CerrarBtn from '../assets/icons/cerrar.svg'
import { parseISO, format } from 'date-fns';

const Modal = ({ onClose, movie }) => {
  const releaseDate = movie.release_date ? parseISO(movie.release_date) : null;
  const formattedDate = releaseDate ? format(releaseDate, 'dd/MM/yy') : null;
  const formattedVoteAverage = movie.vote_average ? movie.vote_average.toFixed(2) : null;

  const ocultarModal = () => {
    onClose();
  };

  const renderValue = (label, value) => {
    return value ? (
      <p>
        <span className='font-bold text-orange-300'>{label}: </span>
        {value}
      </p>
    ) : null;
  };

  return (
    <>
      <div className='modal  flex justify-center items-center gap-7'>
        <div className='flex flex-col  border-solid border border-white p-9 text-xl'>
          {renderValue('Movie id', movie.id)}
          {renderValue('Movie title', movie.title)}
          {renderValue('Original title', movie.original_title)}
          {renderValue('Average vote', formattedVoteAverage)}
          {renderValue('Release date', formattedDate)}
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