import { useEffect, useState } from "react";
import { getImageOriginal } from "../service/api";
import watchNow from '../assets/icons/watchnow.svg';
import peopleWat from '../assets/icons/peopleWatching.svg';

const Banner = ({ id, title, imagePath, imagePath2 }) => {

  const [image, setImage] = useState();

  const getImage = async () => {
    const imgData = await getImageOriginal(imagePath)
    setImage(imgData)
  }

  useEffect(() => {
    getImage()
  }, [])

  return (
    <div
      className={`flex items-end bg-slate-700 container w-full h-[13rem] rounded-[2rem] relative`}
      style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundClip: 'content-box', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      

      <div className="flex justify-between w-full h-full relative">
        <div className="">
          <img src={peopleWat} alt="" className="scale-125 absolute top-6 left-10" />
          <img src={watchNow} alt="" className="scale-125 absolute bottom-6 left-10" />
        </div>
        <div className="flex items-end">
          <h1 className="text-6xl font-bold uppercase mr-9 mb-14 ">{title}</h1>
        </div>

      </div>
    </div>
  )
}

export default Banner