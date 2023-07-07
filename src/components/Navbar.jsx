import logo from '../assets/images/logo.svg';
import group13 from '../assets/icons/Group13.svg'
import group14 from '../assets/icons/Group14.svg'
import frame from '../assets/icons/Frame2.svg'
import mont from '../assets/icons/montanaN.svg'
import Search from './Search';

const Navbar = () => {

  return (
      <nav className="flex bg-[#17171B] w-full h-[5.5rem]  top-0 left-0 shadow-md justify-between px-12 font-bold font-['Quicksand'] text-xs border-b-solid border-b  border-b-gray-700">

        <div className=' flex items-center'>
          <img src={logo} alt="" id='nav_logo' className=' min-w-[76px]' />
        </div>

        <ul className='relative flex flex-grow mx-32 pl-3 gap-16 items-center  text-white '>
          <li className='hover:opacity-100 hover:cursor-pointer'>Movies</li>
          <li className='opacity-50 hover:opacity-100 hover:cursor-pointer'>TV shows</li>
          <li className='opacity-50 hover:opacity-100 hover:cursor-pointer'>Animations</li>
          <li className='opacity-50 hover:opacity-100 hover:cursor-pointer'>Plans</li>
          <img src={mont} alt="" className='absolute top-[78px] h-2.5 left-1' />
        </ul>

        <div className='flex   items-center gap-6'>
          <Search />
          <img src={group13} alt="" />
          <img src={group14} alt="" />
          <img src={frame} alt="" />
        </div>

      </nav>
  )
}

export default Navbar