import { useEffect, useState } from 'react'
import play from '../assets/icons/PlayIconFull.svg'
import minute from '../assets/icons/Minute.svg'
import { getImageOriginal, getMovieCountry } from '../service/api';

const CardNewTrailer = ({ id, title, imagePath, imagePath2 }) => {

  const [country, setCountry] = useState('');
  const [image, setImage] = useState();

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

  const getCountry = async () => {
    const resp = await getMovieCountry(id)
    setCountry(resp)
  }

  useEffect(() => {
    getImage()
    getCountry()
    getImageAux()
  }, [])

  return (
    <>
      <div
        className={`flex items-end bg-slate-700 container mx-auto w-[80%] h-[11rem] rounded-[2rem] relative`}
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundClip: 'content-box', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        <div className='relative bg-white bg-opacity-10 backdrop-filter backdrop-blur-[0.2rem] h-[35%] w-full rounded-b-[2rem] rounded-t-[1rem] p-4 '>

          <div className='flex justify-items-center justify-between gap-3'>
            <div className='my-auto'>
              <img src={play} alt="" />
            </div>
            <div className='w-[70%]'>
              <h5 className="text-xs mb-2 font-bold text- transition-opacity">
                {title}
              </h5>
              <h6 className="text-xs mb-2 text-body-secondary text-gray-300 transition-opacity">
                Country: {country}
              </h6>
            </div>
            <div className='my-auto'>
              <img src={minute} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardNewTrailer