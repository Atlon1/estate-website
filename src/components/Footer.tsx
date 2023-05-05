import React from 'react';
import Logo from "../assets/Maciej_logo.png"

const Footer = () => {

    return (
        <footer className='bg-black py-9 text-center text-white'>
            <div className='container mx-auto '>
                <div className='flex flex-col items-center'>
                    CopyRight &copy; 2023. All rights reserved.
                    <img className='w-[200px] py-2' src={Logo}/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;