import React from 'react';
import logo from '../../assets/profile.png'
import Aos from 'aos';

Aos.init({
    delay: 500
})

const About = () => {
    return (
        <div id='about' className=''>
           <div className='flex flex-col justify-center px-10'>
           <p className='md:text-4xl text-2xl font-bold mb-3 mt-10 md:mt-16 text-center uppercase'>About Me</p>
            <div className="divider md:w-1/3 mx-auto my-3"><img className='w-8 rounded-full' src={logo} alt="" /></div>
            <div data-aos='fade-down-right' className='flex flex-col'>
            <p className='font-bold uppercase md:text-5xl mt-5 md:mb-8'>Introducing My self</p>
            <p className='md:font-semibold w-11/12 md:text-xl'>I'm a Junior Web Developer building different types of core javaScript projects, React js web applications and full stack web applications. Check out some of my work in the Projects section. <br />
                I also like to work with group works where I can share my knowledge to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community.Also I am a quick learner about any upcoming update technology. <br />
                I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
                <a href="#contact"><button className='btn glass btn-sm md:btn-md lg:btn-lg md:mb-10 mt-5 md:mt-10 md:w-2/12 mx-auto md:mx-1 text-white md:font-bold'>Contact Me</button></a>
            </div>
           </div>
        </div>
    ); 
};

export default About;