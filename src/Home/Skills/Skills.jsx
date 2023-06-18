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
import mySql from '../../assets/Skill Logo/mongodb.png'
import nextJs from '../../assets/Skill Logo/nextJs.png'
import redux from '../../assets/Skill Logo/redux.png'
import axios from '../../assets/Skill Logo/Axios.png'
import vsCode from '../../assets/Skill Logo/vsCode.png'
import figma from '../../assets/Skill Logo/figma.png'
import netlify from '../../assets/Skill Logo/netlify.png'
import vercel from '../../assets/Skill Logo/vercel.png'
import vite from '../../assets/Skill Logo/vite.svg'
import Progress from '../../Components/Progress';

Aos.init({
    delay: 800
})


const Skills = () => {
    return (
        <div className=' text-white py-5 px-7'>
            <p className='font-bold uppercase md:text-5xl md:mt-5 md:mb-8 text-center'>Skills</p>
            <div>
                <p className='font-bold uppercase md:text-3xl text-xl'>front end :</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div data-aos='fade-right' className='flex items-center mt-5'>
                        <img className='w-16' src={htmlLogo} alt="" />
                        <progress className="progress ml-3 progress-primary w-56" value="90" max="100"></progress>
                        <p className='ml-3'>90%</p>
                    </div>
                    <div data-aos='fade-right' className='flex items-center mt-5'>
                        <img className='w-16' src={cssLogo} alt="" />
                        <progress className="progress ml-3 progress-primary w-56" value="80" max="100"></progress>
                        <p className='ml-3'>80%</p>
                    </div>
                    <div data-aos='fade-right' className='flex items-center mt-5'>
                        <img className='w-16' src={tailwindLogo} alt="" />
                        <progress className="progress ml-3 progress-primary w-56" value="80" max="100"></progress>
                        <p className='ml-3'>80%</p>
                    </div>
                    <div data-aos='fade-right' className='flex items-center mt-5'>
                        <img className='w-16' src={bootstrapLogo} alt="" />
                        <progress className="progress ml-3 progress-primary w-56" value="80" max="100"></progress>
                        <p className='ml-3'>80%</p>
                    </div>
                    <div data-aos='fade-right' className='flex items-center mt-5'>
                        <img className='w-16' src={javascriptLogo} alt="" />
                        <progress className="progress ml-3 progress-primary w-56" value="80" max="100"></progress>
                        <p className='ml-3'>80%</p>
                    </div>
                    <div data-aos='fade-right' className='flex items-center mt-5'>
                        <img className='w-16' src={reactLogo} alt="" />
                        <progress className="progress ml-3 progress-primary w-56" value="80" max="100"></progress>
                        <p className='ml-3'>80%</p>
                    </div>
                    <div data-aos='fade-right' className='flex items-center mt-5'>
                        <img className='w-16' src={nodeLogo} alt="" />
                        <progress className="progress ml-3 progress-primary w-56" value="80" max="100"></progress>
                        <p className='ml-3'>80%</p>
                    </div>
                    <div data-aos='fade-right' className='flex items-center mt-5'>
                        <img className='w-16' src={firebaseLogo} alt="" />
                        <progress className="progress ml-3 progress-primary w-56" value="80" max="100"></progress>
                        <p className='ml-3'>80%</p>
                    </div>
                    <div data-aos='fade-right' className='flex items-center mt-5'>
                        <img className='w-16' src={nextJs} alt="" />
                        <progress className="progress ml-3 progress-primary w-56" value="80" max="100"></progress>
                        <p className='ml-3'>80%</p>
                    </div>
                    <div data-aos='fade-right' className='flex items-center mt-5'>
                        <img className='w-16' src={redux} alt="" />
                        <progress className="progress ml-3 progress-primary w-56" value="80" max="100"></progress>
                        <p className='ml-3'>80%</p>
                    </div>
                    <div data-aos='fade-right' className='flex items-center mt-5'>
                        <img className='w-16' src={axios} alt="" />
                        <progress className="progress ml-3 progress-primary w-56" value="80" max="100"></progress>
                        <p className='ml-3'>80%</p>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <p className='font-bold uppercase md:text-3xl text-xl'>Back End :</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div data-aos='fade-left' className='flex items-center mt-5'>
                        <img className='w-16' src={expressLogo} alt="" />
                        <progress className="progress ml-3 progress-primary w-56" value="80" max="100"></progress>
                        <p className='ml-3'>80%</p>
                    </div>
                    <div data-aos='fade-left' className='flex items-center mt-5'>
                        <img className='w-16' src={mongodbLogo} alt="" />
                        <progress className="progress ml-3 progress-primary w-56" value="80" max="100"></progress>
                        <p className='ml-3'>80%</p>
                    </div>
                    <div data-aos='fade-left' className='flex items-center mt-5'>
                        <img className='w-16' src={mySql} alt="" />
                        <progress className="progress ml-3 progress-primary w-56" value="80" max="100"></progress>
                        <p className='ml-3'>80%</p>
                    </div>
                </div>
            </div>
            <div className='mt-8'>
                <p className='font-bold uppercase md:text-3xl text-xl'>Tools :</p>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div data-aos='fade-up' className='flex items-center mt-5'>
                        <img className='w-16' src={vsCode} alt="" />
                        <progress className="progress ml-3 progress-primary w-56" value="80" max="100"></progress>
                        <p className='ml-3'>80%</p>
                    </div>
                    <div data-aos='fade-up' className='flex items-center mt-5'>
                        <img className='w-16' src={figma} alt="" />
                        <progress className="progress ml-3 progress-primary w-56" value="80" max="100"></progress>
                        <p className='ml-3'>80%</p>
                    </div>
                    <div data-aos='fade-up' className='flex items-center mt-5'>
                        <img className='w-16' src={netlify} alt="" />
                        <progress className="progress ml-3 progress-primary w-56" value="80" max="100"></progress>
                        <p className='ml-3'>80%</p>
                    </div>
                    <div data-aos='fade-up' className='flex items-center mt-5'>
                        <img className='w-16' src={vercel} alt="" />
                        <progress className="progress ml-3 progress-primary w-56" value="80" max="100"></progress>
                        <p className='ml-3'>80%</p>
                    </div>
                    <div data-aos='fade-up' className='flex items-center mt-5'>
                        <img className='w-16' src={vite} alt="" />
                        <progress className="progress ml-3 progress-primary w-56" value="80" max="100"></progress>
                        <p className='ml-3'>80%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;