import React from 'react';
import logo from '../assets/profile.png'
import { FaFacebookF, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
    const handleWhatsApp = () => {
        const phoneNumber = '+8801708357623';
        const message = 'Hello, I would like to connect with you.';
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <footer className="footer items-center p-5 bg-neutral text-neutral-content">
            <div className="items-center grid-flow-col">
                <img className='w-10 md:w-16 rounded-full mx-5' src={logo} alt="" />
                <p className='md:font-bold md:text-xl'>Copyright © 2023 - All right reserved</p>
            </div>
            <div className="grid-flow-col gap-4 place-self-center justify-center md:justify-self-end">
                <Link to='https://github.com/Abdullah-5603'><FaGithub className='w-7 h-7' /> </Link>
                <Link to='https://www.facebook.com/profile.php?id=100093044202083'><FaFacebookF className='w-7 h-7' /></Link>
                <FaWhatsapp className="w-7 h-7" onClick={handleWhatsApp}/>

                {/* <audio src=""></audio> */}
            </div>
        </footer>
    );
};

export default Footer;