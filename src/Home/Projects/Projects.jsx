import Aos from 'aos';
import React, { useEffect, useState } from 'react';

Aos.init({
    delay: 600
})

const Projects = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <div id='projects' className='mt-8 px-7 py-5'>
            <p className='font-bold uppercase md:text-5xl md:mt-5 md:mb-8 text-center'>Projects</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    data.map(dt => (
                        <div data-aos='flip-up' key={dt.id} className="flex flex-col md:flex-row w-full glass">
                            <img className='md:w-1/2 h-full' src={dt.image} alt={dt.name} />
                            <div className="md:w-1/2 md:p-5">
                                <h2 className="card-title">{dt.name}</h2>
                                <p>{dt.details}</p>
                                <div className="flex items-center justify-between w-4/6 mx-auto my-4 md:w-full">
                                    <button className="btn glass btn-sm md:btn-md lg:btn-lg md:font-bold">Live Site</button>
                                    <button className="btn glass btn-sm md:btn-md lg:btn-lg md:font-bold">View Details</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Projects;