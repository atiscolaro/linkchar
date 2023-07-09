import { useEffect, useState } from 'react'
import play from '../assets/icons/PlayIconFull.svg'
import star from '../assets/icons/star-icon.svg'
import { getImageOriginal, getMovieCountry, getMovieGenres } from '../service/api';

const Card = ({ title, description, id, imagePath, imagePath2 }) => {

  const [isHovered, setIsHovered] = useState(false);
  const [image, setImage] = useState()
  const [country, setCountry] = useState('')
  const [genre, setGenre] = useState('')

  const getImage = async () => {
    const imgData = await getImageOriginal(imagePath)
    setImage(imgData)
  }

  const getImageAux = async () => {
    const imgDataAux = await getImageOriginal(imagePath2)
    if (!image) {
      setImage(imgDataAux)
    }
  }

  const movieGenre = async () => {
    const response = await getMovieGenres(id);
    const formattedResponse = response.join(" / ");
    setGenre(formattedResponse)
  }

  const getCountry = async () => {
    const resp = await getMovieCountry(id)
    setCountry(resp)
  }

  useEffect(() => {
    getImage()
    movieGenre()
    getCountry()
    getImageAux()
  }, [])

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        className={`flex items-end bg-slate-700 container min-w-[20rem] min-h-[15rem] max-w-[30rem] max-h-[16rem] md:max-w-[22rem] md:min-h-[12rem] lg:min-w-[14rem] lg:max-h-[8rem] lg:max-w-[27rem] lg:min-h-[14rem] rounded-[2rem] relative`}
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundClip: 'content-box', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        <div
          className=' relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-[0.2rem] h-[35%] hover:h-full hover:bg-black hover:bg-opacity-80 w-full rounded-b-[2rem] rounded-t-[1rem] p-4 '
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {isHovered ? (
            <>
              <div className='max-h-full overflow-y-auto flex flex-col gap-3 p-6'>
                <h5 className=" mb-2 font-bold text-white transition-opacity">
                  {title}
                </h5>
                <h6 className='text-white'>Country: {country}</h6>
                <p className='text-white'>
                  {description}
                </p>
              </div>
            </>
          ) : (
            <>
              <div className='flex justify-items-center justify-between gap-3'>
                <div className='my-auto'>
                  <img src={play} alt="" />
                </div>
                <div className='w-[70%]'>
                  <h5 className="text-xs mb-2 font-bold text- transition-opacity">
                    {title}
                  </h5>
                  <h6 className="text-xs mb-2 text-body-secondary text-gray-300 transition-opacity">
                    {genre}
                  </h6>
                </div>
                <div className='my-auto flex gap-1'>
                  <img src={star} alt="" />
                  <p className='text-white text-xs'>4.8</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Card