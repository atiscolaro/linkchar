import React, { useEffect, useRef, useState } from 'react'
import CerrarBtn from '../assets/icons/cerrar.svg'
import { parseISO, format } from 'date-fns';
import { gsap } from "gsap";
import { getImageOriginal } from '../service/api';

const Modal = ({ onClose, movie }) => {
  const modalRef = useRef(null);
  const releaseDate = movie.release_date ? parseISO(movie.release_date) : null;
  const formattedDate = releaseDate ? format(releaseDate, 'dd/MM/yy') : null;
  const formattedVoteAverage = movie.vote_average ? movie.vote_average.toFixed(2) : null;
  const [image, setImage] = useState()

  const ocultarModal = () => {
    gsap.to(modalRef.current, {
      y: "100vh",
      opacity: 0,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        onClose();
      }
    });
  };

  const renderValue = (label, value) => {
    return value ? (
      <p>
        <span className='font-bold text-orange-300'>{label}: </span>
        {value}
      </p>
    ) : null;
  };

  useEffect(() => {
    const modalElement = modalRef.current;

    const tl = gsap.timeline();
    tl.from(modalElement, {
      rotation: 0,
      duration: 0,
    }).to(modalElement, {
      rotation: 360,
      duration: 0.4,
      ease: "linear",
    });

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    getImage()
    getImageAux()
  }, [])
  // console.log(movie);

  const getImage = async () => {
    const imgData = await getImageOriginal(movie.backdrop_path)
    setImage(imgData)
  }

  const getImageAux = async () => {
    const imgDataAux = await getImageOriginal(movie.poster_path)
    if (!image) {
      setImage(imgDataAux)
    }
  }
  console.log(image);
  return (
    <>
      <div className='modal  flex justify-center items-center gap-7' >
        <div className='flex gap-6 border-solid border border-white p-9 text-xl' ref={modalRef}>
          <div className='w-[20rem]'>
            <img src={image} alt="" />
          </div>
          <div className='flex flex-col gap-3'>
            {renderValue('Movie id', movie.id)}
            {renderValue('Movie title', movie.title)}
            {renderValue('Original title', movie.original_title)}
            {renderValue('Average vote', formattedVoteAverage)}
            {renderValue('Release date', formattedDate)}

          </div>
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