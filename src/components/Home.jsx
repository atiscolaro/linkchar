import React, { useState } from 'react'
import Aside from './Aside'
import BodyBox from './BodyBox'

const Home = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <div className='flex'>
        <div className={`${open ? 'w-[35%]' : 'w-[2%]'} hidden lg:block`}>
          <Aside
            open={open}
            setOpen={setOpen}
          />
        </div>
        <div className='w-full'>
          <BodyBox />
        </div>
      </div>
    </>
  )
}

export default Home