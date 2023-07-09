import React from 'react'
import Aside from './Aside'
import BodyBox from './BodyBox'

const Home = () => {
  return (
    <>
      <div className='flex'>
        <div className='w-[35%] hidden lg:block'>
          <Aside />
        </div>
        <div className='w-full'>
          <BodyBox />
        </div>
      </div>
    </>
  )
}

export default Home