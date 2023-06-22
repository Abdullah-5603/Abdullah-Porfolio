import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

Aos.init({
    delay: 600
})

const Projects = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://portfolio-server-dusky-mu.vercel.app/projects')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div id='projects' className='mt-8 px-7 py-5'>
            <p className='text-2xl font-bold uppercase md:text-5xl md:mt-5 mb-8 text-center'>Projects</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    data.map(dt => (
                        <div data-aos='flip-up' key={dt.id} className="flex flex-col md:flex-row w-full glass">
                            <img className='md:w-1/2 h-full' src={dt.images[0]} alt={dt.name} />
                            <div className="md:w-1/2 p-5">
                                <h2 className="card-title">{dt.name}</h2>
                                <p className='my-5'>{dt.details.slice(0, 200)}</p>
                                <div className="flex items-center justify-between w-4/6 mx-auto md:w-full">
                                    <Link to={dt.links[0].live_site}><button className="btn glass btn-sm md:btn-md md:font-bold">Live Site</button></Link>
                                    <Link to={`/project-details/${dt.id}`}><button className="btn glass btn-sm md:btn-md md:font-bold">View Details</button></Link>
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