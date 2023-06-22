import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ImageCarousel from '../../Components/imageCarousel';

const ProjectDetails = () => {
    const data = useLoaderData()
    const { images, details, Features, links } = data[0]

    console.log(data);
    return (
        <div className='w-full md:w-2/3 md:mx-auto my-10'>
            <ImageCarousel images={images} />
            <div className='mx-7 md:mx-0'>
                <p className='text-base font-bold my-5'>Description : <span className='font-normal'>{details}</span></p>
                <p className='font-bold text-base my-5'>Features :</p>
                <ul className='font-normal list-disc'>{
                    Features.map((feature) => (
                        <li>
                            {feature}
                        </li>
                    ))
                }</ul>
            </div>
            <div className='flex items-center justify-around my-5'>

                <Link to={links[0].live_site}><button className='btn glass btn-sm md:btn-md md:font-bold'>Live Site</button></Link>
                <Link to={links[1].github_client}><button className='btn glass btn-sm md:btn-md md:font-bold'>Github Client</button></Link>
                <Link to={links[2].github_server}><button className='btn glass btn-sm md:btn-md md:font-bold'>Github Server</button></Link>

            </div>
        </div>
    );
};

export default ProjectDetails;