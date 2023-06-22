import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const downloadResume = () =>{
        window.open('https://drive.google.com/file/d/13Prc08Rk8Pm8vu5u7Yyt9QykqOjaA7vy/view?usp=sharing', '_blank')
    }
    return (
        <div id="home" className="bg-fixed mt-3 md:mt-5 w-full relative h-full bg-cover" style={{ backgroundImage: 'url(https://i.ytimg.com/vi/mOFoh9FUR8w/maxresdefault.jpg)' }}>
            <div className='absolute h-full w-full bg-black opacity-20'></div>
            <div className="mx-auto md:w-2/3 flex flex-col py-16 space-y-6 md:space-y-6 md:py-48 items-center justify-center">
                <p className="text-xl md:text-6xl font-bold text-white uppercase">Hey' I am Abu Abdullah</p>
                <p className='w-5/6 md:mt-3 text-center md:text-xl text-white'>I am a full-stack web developer.I am seeking a web challenging position in a reputed organization where I can expand my web developing knowledge</p>
                <div className='flex mt-2 md:mt-6 w-2/3 md:w-5/12 justify-center'>
                <button onClick={downloadResume} className='btn glass text-white md:font-bold btn-sm md:btn-md lg:btn-lg'>Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Home;
