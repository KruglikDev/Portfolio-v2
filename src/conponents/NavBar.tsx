import {useEffect, useState} from "react";
import {IoMenu} from "react-icons/io5";

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);

    //TODO add closing on outside click
    useEffect(() => {
        const handleKeypress = (e: KeyboardEvent) => {
            if (isActive && e.key === 'Escape') {
                setIsActive(false);
            }
        }

        window.addEventListener('keydown', handleKeypress);

        return () => window.removeEventListener('keydown', handleKeypress);
    }, [isActive]);

    return (
        <nav className='flex justify-center items-center w-full px-6 z-50 fixed inset-x-0 top-2'>
            <div className="w-full md:w-880 bg-navBar p-4 rounded-2xl flex items-center">
                <h1 className="text-xl text-slate-400 font-bold">
                    Andrey Kruglik
                </h1>

                <div className='hidden md:flex items-center gap-6 ml-6 flex-1'>
                    <div className='flex gap-6 ml-6 flex-1 justify-center'>
                        <a href="#home"
                           className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
                            Home
                        </a>
                        <a href="#about"
                           className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
                            About
                        </a>
                        <a href="#projects"
                           className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
                            Projects
                        </a>
                        <a href="#contact"
                           className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
                            Contact
                        </a>
                    </div>

                    <a href="#"
                       className='ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out'>
                        Download
                    </a>
                </div>

                <div
                    id='burger'
                    className="block md:hidden ml-auto cursor-pointer"
                    onClick={() => setIsActive(!isActive)}
                >
                    <IoMenu className='text-2xl text-textBase'/>
                </div>

                {isActive && (
                    <div
                        className='p-4 w-275 bg-navBar rounded-lg fixed top-24 right-16 flex flex-col items-center justify-evenly gap-6'>
                        <a onClick={() => setIsActive(false)}
                           href="#home"
                           className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
                            Home
                        </a>
                        <a onClick={() => setIsActive(false)}
                           href="#about"
                           className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
                            About
                        </a>
                        <a onClick={() => setIsActive(false)}
                           href="#projects"
                           className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
                            Projects
                        </a>
                        <a onClick={() => setIsActive(false)}
                           href="#contact"
                           className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer duration-100 ease-in-out'>
                            Contact
                        </a>
                        <a onClick={() => setIsActive(false)}
                           href="#"
                           className='text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 duration-100 ease-in-out'>
                            Download
                        </a>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar;