import Aos from 'aos';
import React from 'react';
import htmlLogo from '../../assets/Skill Logo/html.png'
import cssLogo from '../../assets/Skill Logo/css.png'
import tailwindLogo from '../../assets/Skill Logo/tailwind.png'
import bootstrapLogo from '../../assets/Skill Logo/bootstrap.png'
import javascriptLogo from '../../assets/Skill Logo/javascript.png'
import reactLogo from '../../assets/Skill Logo/react.png'
import nodeLogo from '../../assets/Skill Logo/node.png'
import firebaseLogo from '../../assets/Skill Logo/firebase.png'
import expressLogo from '../../assets/Skill Logo/express.png'
import mongodbLogo from '../../assets/Skill Logo/mongodb.png'
import mySql from '../../assets/Skill Logo/mysql.png'
import nextJs from '../../assets/Skill Logo/nextJs.png'
import redux from '../../assets/Skill Logo/redux.png'
import axios from '../../assets/Skill Logo/Axios.png'
import vsCode from '../../assets/Skill Logo/vsCode.png'
import figma from '../../assets/Skill Logo/figma.png'
import netlify from '../../assets/Skill Logo/netlify.png'
import vercel from '../../assets/Skill Logo/vercel.png'
import vite from '../../assets/Skill Logo/vite.svg'

Aos.init({
    delay: 800
})


const Skills = () => {
    return (
        <div className=' text-white py-5 px-7'>
            <p className='text-2xl font-bold uppercase md:text-5xl md:mt-5 md:mb-8 text-center'>Skills</p>
            <div className='grid grid-cols-2 md:grid-cols-7 gap-5 mt-5'>
                <div data-aos='fade-up' className='p-5 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl group'>
                    <img className='w-16 group-hover:scale-125' src={htmlLogo} alt="" />
                </div>
                <div data-aos='fade-up' className='p-5 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl group'>
                    <img className='w-16 group-hover:scale-125' src={cssLogo} alt="" />
                </div>
                <div data-aos='fade-up' className='p-5 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl group'>
                    <img className='w-16 group-hover:scale-125' src={tailwindLogo} alt="" />
                </div>
                <div data-aos='fade-up' className='p-5 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl group'>
                    <img className='w-16 group-hover:scale-125' src={bootstrapLogo} alt="" />
                </div>
                <div data-aos='fade-up' className='p-5 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl group'>
                    <img className='w-16 group-hover:scale-125' src={javascriptLogo} alt="" />
                </div>
                <div data-aos='fade-up' className='p-5 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl group'>
                    <img className='w-16 group-hover:scale-125' src={reactLogo} alt="" />
                </div>
                <div data-aos='fade-up' className='p-5 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl group'>
                    <img className='w-16 group-hover:scale-125' src={nodeLogo} alt="" />
                </div>
                <div data-aos='fade-up' className='p-5 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl group'>
                    <img className='w-16 group-hover:scale-125' src={firebaseLogo} alt="" />
                </div>
                <div data-aos='fade-up' className='p-5 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl group'>
                    <img className='w-16 group-hover:scale-125' src={expressLogo} alt="" />
                </div>
                <div data-aos='fade-up' className='p-5 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl group'>
                    <img className='w-16 group-hover:scale-125' src={mongodbLogo} alt="" />
                </div>
                <div data-aos='fade-up' className='p-5 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl group'>
                    <img className='w-16 group-hover:scale-125' src={mySql} alt="" />
                </div>
                <div data-aos='fade-up' className='p-5 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl group'>
                    <img className='w-16 group-hover:scale-125' src={nextJs} alt="" />
                </div>
                <div data-aos='fade-up' className='p-5 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl group'>
                    <img className='w-16 group-hover:scale-125' src={redux} alt="" />
                </div>
                <div data-aos='fade-up' className='p-5 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl group'>
                    <img className='w-16 group-hover:scale-125' src={axios} alt="" />
                </div>
                <div data-aos='fade-up' className='p-5 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl group'>
                    <img className='w-16 group-hover:scale-125' src={vsCode} alt="" />
                </div>
                <div data-aos='fade-up' className='p-5 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl group'>
                    <img className='w-16 group-hover:scale-125' src={figma} alt="" />
                </div>
                <div data-aos='fade-up' className='p-5 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl group'>
                    <img className='w-16 group-hover:scale-125' src={netlify} alt="" />
                </div>
                <div data-aos='fade-up' className='p-5 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl group'>
                    <img className='w-16 group-hover:scale-125' src={vercel} alt="" />
                </div>
                <div data-aos='fade-up' className='p-5 bg-gray-800 rounded-2xl flex items-center justify-center shadow-2xl group'>
                    <img className='w-16 group-hover:scale-125' src={vite} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Skills;