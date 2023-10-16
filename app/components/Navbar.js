import {AiOutlineMenu} from 'react-icons/ai'
import Logo from './Logo'

const Navbar = () => {
  return (
    <div className='w-full bg-white py-2 fixed top-0'>
        <div className='max-w-7xl w-full mx-auto flex'>
            <div className='ml-0 mr-auto'>
                <Logo />
            </div>
            <div className='mr-0 ml-auto'>
                <span className='text-3xl text-orange-500 cursor-pointer'>
                    <AiOutlineMenu />
                </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar