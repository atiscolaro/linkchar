import logo from '../assets/images/logo.svg';
import group13 from '../assets/icons/Group13.svg'
import group14 from '../assets/icons/Group14.svg'
import frame from '../assets/icons/Frame2.svg'
import mont from '../assets/icons/montanaN.svg'
import Search from './Search';
import { Link } from 'react-router-dom';

const Navbar = ({ onSearch }) => {

  return (
    <nav className="flex  bg-[#17171B] w-full h-[6rem]  top-0 left-0 shadow-md gap-10 justify-between  px-14 font-bold font-['Quicksand'] text-lg border-b-solid border-b  border-b-gray-700">
      <div className='flex items-center scale-125 '>
        <Link to='/' >
          <img src={logo} alt="" id='nav_logo' className=' min-w-[6rem]' />
        </Link>
      </div>
      <div className='flex w-[50%] '>

        <ul className='relative flex flex-grow pl-3 gap-16 items-center  text-white '>
          <li className='hover:opacity-100 hover:cursor-pointer hidden lg:block'>Movies</li>
          <li className='opacity-50 hover:opacity-100 hover:cursor-pointer hidden lg:block'>TV shows</li>
          <li className='opacity-50 hover:opacity-100 hover:cursor-pointer hidden lg:block'>Animations</li>
          <li className='opacity-50 hover:opacity-100 hover:cursor-pointer hidden lg:block'>Plans</li>
          <img src={mont} alt="" className='absolute h-2.5 left-4 bottom-0 hidden lg:block' />
        </ul>
      </div>

      <div className='flex items-center gap-12'>
        <Search onSearch={onSearch}/>
        <img src={group13} alt="" className='hidden lg:block scale-125' />
        <img src={group14} alt="" className='hidden lg:block scale-125' />
        <img src={frame} alt="" className='hidden lg:block scale-125' />
      </div>
    </nav>
  )
}

export default Navbar