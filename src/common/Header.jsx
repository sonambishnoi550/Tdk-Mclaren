import React, { useEffect, useState } from 'react';
import { HEADER_LIST } from '../utils/Helper';
import { SearchIcon } from '../utils/Icons'; // Make sure you import SearchIcon

const Header = () => {
    const [open, setOpen] = useState(false);
    const toggleSidebar = () => setOpen(!open);
    const closeNavbar = () => {
        setOpen(false);
    };

    useEffect(() => {
        const handleOverflow = () => {
            if (open && window.innerWidth < 1024) {
                document.body.classList.add("overflow-hidden");
            } else {
                document.body.classList.remove("overflow-hidden");
            }
        };
        handleOverflow();
        window.addEventListener("resize", handleOverflow);
        return () => {
            window.removeEventListener("resize", handleOverflow);
        };
    }, [open]);

    return (
        <div className='pt-11 overflow-hidden min-[1921px]:max-w-[1920px] mx-auto bg-blue pb-3'>
            <div className='container flex justify-between items-center'>
                <div className={`flex gap-6 max-lg:flex-col max-lg:justify-center max-lg:items-center ${open ? 'max-lg:z-10 max-lg:translate-x-0 max-lg:bg-black max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:h-full max-lg:w-full justify-center items-center' : 'max-lg:-left-full max-lg:hidden'}`}>
                    {HEADER_LIST.map((obj, i) => (
                        <div key={i}>
                            <ul>
                                <li className='flex gap-1 flex-row justify-center items-center relative after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:bottom-0 after:h-0.5 after:bg-white pb-0.5'>
                                    <a onClick={closeNavbar} href={obj.link} className=' text-custom-xs leading-custom-md font-normal text-white'>{obj.item}</a>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="relative flex items-center">
                    <input
                        className="bg-transparent text-white border py-2 px-[14px] placeholder:text-white pl-10 pr-10"
                        type="text"
                        placeholder="Search by Keyword"
                    />
                    {<SearchIcon className="absolute left-3 text-white" />}
                </div>

                <div onClick={toggleSidebar} className='z-[15] flex-col gap-1 lg:hidden flex'>
                    <span className={`${open ? 'w-8 h-1 bg-white rotate-45 translate-y-3 duration-300 ease-linear rounded' : 'w-8 h-1 bg-white duration-300 ease-linear rounded'}`}></span>
                    <span className={`${open ? 'w-8 h-1 bg-white -translate-x-10 opacity-0 ' : 'w-8 h-1 rounded bg-white'}`}></span>
                    <span className={`${open ? 'w-8 h-1 bg-white -rotate-45 -translate-y-1 duration-300 ease-linear rounded' : 'w-8 h-1 bg-white duration-300 ease-linear rounded'}`}></span>
                </div>
            </div>
        </div>
    );
};

export default Header;
