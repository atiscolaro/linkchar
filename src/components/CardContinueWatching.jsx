import { useEffect, useState } from 'react'
import play from '../assets/icons/PlayIconFull.svg'
import controllers from '../assets/icons/controllers.svg'
import { getImageOriginal} from '../service/api';
import trending from '../assets/icons/trending.svg';

const CardContinueWatching = ({ id, title, imagePath, imagePath2 }) => {

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
  useEffect(() => {
    getImage()
    getImageAux()
  }, [])

  return (
    <>
      <div
        className={`flex items-end bg-slate-700 container relative w-full h-[11rem] rounded-[2rem] `}
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundClip: 'content-box', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
      >
        <div className='absolute top-6 left-10'>
              <img src={trending} alt="" className="scale-125  top-6 left-10" />
        </div>
        <div className=' bg-white bg-opacity-10 backdrop-filter backdrop-blur-[0.2rem] h-[40%] w-full rounded-b-[2rem] rounded-t-[1rem] p-4 '>
          <div className='flex justify-items-center items-center justify-between gap-3'>
            <div className='my-auto p-2'>
              <img src={play} alt="" />
            </div>
            <div className='w-[70%]'>
              <h5 className="text-xs mb-2 font-bold text- transition-opacity">
                {title}
              </h5>
              <p className='text-xs mb-2 text-body-secondary text-gray-300'>
                3h ago
              </p>
            </div>
            <div className='my-auto h-full '>
              <img src={controllers} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardContinueWatching