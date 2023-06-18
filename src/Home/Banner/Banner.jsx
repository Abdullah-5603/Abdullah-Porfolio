import React from 'react';

const Home = () => {
    return (
        <div id="home" className="relative mt-3 md:mt-5">
            <img className="md:h-screen w-full " src="https://i.ibb.co/hWt6Ly4/Black-Modern-Minimalist-Simple-Technology-Banner.png" alt="Background" />
            <div className='absolute inset-0 opacity-20 bg-black w-full h-full'></div>
            <div className="absolute inset-0 mx-auto md:w-2/3 flex flex-col items-center justify-center">
                <p className="text-xl md:text-6xl font-bold text-white uppercase">Hey' I am Abu Abdullah</p>
                <p className='w-5/6 md:mt-3 text-center md:text-xl text-white'>I am a full-stack web developer.I am seeking a web challenging position in a reputed organization where I can expand my web developing knowledge</p>
                <div className='flex mt-2 md:mt-6 w-2/3 md:w-5/12 justify-center'>
                    <button className='btn glass text-white md:font-bold btn-sm md:btn-md lg:btn-lg'>Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
