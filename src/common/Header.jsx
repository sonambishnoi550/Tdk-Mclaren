import React, { useEffect, useState } from 'react';
import { Header_List } from '../utils/Helper';

const Header = () => {
    const [open, setOpen] = useState(false);
    const toggleSidebar = () => setOpen(!open);
    const closeNavbar = () => setOpen(false);
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
        <div className='min-[1921px]:max-w-[1920px] mx-auto'>
            <div className='relative z-20 bg-darkblue w-full'>
                <a href="#">
                    <img className='lg:block hidden w-fit pointer-events-none' src="./assets/webp/header-icons.webp" alt="logo" />
                </a>

            </div>
            <div className="flex justify-between bg-[#0046AD] w-full">
                <div className='container bg-[#0046AD] lg:pt-5 lg:pb-3 flex justify-between'>
                    <div className={`flex bg-[#0046AD] gap-7 max-lg:flex-col max-lg:justify-center max-lg:items-center ${open ? 'max-lg:z-10 max-lg:translate-x-0 max-lg:bg-black max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:h-full max-lg:w-full justify-center items-center' : 'max-lg:-left-full max-lg:hidden'}`}>
                        {Header_List.map((obj, i) => (
                            <div className='pt-4' key={i}>
                                <ul>
                                    <li className='flex gap-1 flex-row justify-center items-center relative after:absolute after:w-0 after:transition-all after:duration-300 after:hover:w-full after:bottom-0 after:h-0.5 after:bg-white pb-0.5'>
                                        <a onClick={closeNavbar} href={obj.link} className='text-base font-normal text-white'>{obj.item}</a>
                                    </li>
                                </ul>
                            </div>
                        ))}
                        <div className="flex px-[14px] xl:ml-[405px] max-md:py-3 md:ml-[293px] bg-blue-500 items-center max-w-[476px] justify-end max-sm:pl-3 max-lg:mx-auto border border-white rounded-md">
                            <input
                                type="text"
                                placeholder="Search by Keyword"
                                className="placeholder:text-white text-white placeholder:text-custom-xs placeholder:font-normal w-full !outline-none !bg-transparent placeholder:max-lg:text-sm mr-2"
                            />
                       <img src="/assets/svg/searc-icon.svg
                       " alt="" />
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className=" lg:hidden flex justify-between py-4 bg-[#0046AD] px-5 items-center">
                <a href="#">
                    <img className='max-w-[105px] lg:hidden block' src="./assets/webp/logo.webp" alt="logo" />
                </a>
                <div onClick={toggleSidebar} className='relative z-20 flex-col gap-1 lg:hidden flex items-center'>
                    <span className={`${open ? 'w-8 h-1 bg-white rotate-45 translate-y-3 duration-300 ease-linear' : 'w-8 h-1 bg-white duration-300 ease-linear '}`}></span>
                    <span className={`${open ? 'w-8 h-1 bg-white -translate-x-10 opacity-0' : 'w-8 h-1  bg-white'}`}></span>
                    <span className={`${open ? 'w-8 h-1 bg-white -rotate-45 -translate-y-1 duration-300 ease-linear ' : 'w-8 h-1 bg-white duration-300 ease-linear '}`}></span>
                <p className='text-white font-normal'>MENU</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
