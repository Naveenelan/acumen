import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import {Link} from "react-router-dom";

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="flex w-full justify-between items-center flex-wrap h-42 relative ">
            <div className="max-w-[1240px] mx-auto text-white flex w-full justify-between items-center h-24 px-[calc(100%*0.05)]">

                <Link to="/"><h1 className="w-full text-3xl font-bold text-[var(--red)]">Acumen 2K24</h1></Link>

                <ul className="hidden md:flex flex-end">
                    <li className="p-4"><Link to="/">Home</Link></li>
                    <li className="p-4"><Link to="/events">Events</Link></li>
                    <li className="p-4"><Link to="/about">About</Link></li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

                </div>
                <div className={nav ? 'z-10 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <h1 className="w-full text-3xl font-bold text-[var(--red)] m-4"> Acumen 2K24 </h1>
                    <ul className="uppercase p-4">
                        <li className="p-4 border-b border-gray-600"><Link to="/">Home</Link></li>
                        <li className="p-4 border-b border-gray-600"><Link to="/events">Event</Link></li>
                        <li className="p-4 border-b border-gray-600"><Link to="/about">About</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar;
