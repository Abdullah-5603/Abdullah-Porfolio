import React from 'react';
import mailSend from '../../assets/mail-sending.png';

const Contact = () => {

    // const handleSubmit = event =>{
    //     event.preventDefault()
    //     const form = event.target;
    //     const name = form.name.value;
    //     const email = form.email.value;
    //     const message = form.message.value;

    //     const info = {name, email, message}
    //     console.log(info)
    //     fetch('https://portfolio-server-dusky-mu.vercel.app/mail',{
    //         method : "POST",
    //         headers : {
    //             'content-type' : 'application/json'
    //         },
    //         body: JSON.stringify(info)
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data)
    //     })
    // }

    return (
        <div id='contact' className='mt-8 p-7'>
            <p className='text-2xl font-bold uppercase md:text-5xl md:mt-5 mb-8 text-center'>Contact</p>
            <div className='flex flex-col md:flex-row justify-around md:space-x-10 md:space-y-0 space-y-8 w-full'>
                <div className='md:w-1/2'>
                    <form className='p-10 bg-white'>
                        <p className='uppercase font-semibold text-xl md:text-3xl text-black mb-3 text-center'>Contact me</p>
                        <div className="form-control mb-5">
                            <label className='text-black font-semibold mb-3'>Name</label>
                            <input type="text" name="name" placeholder='Name' className='input input-group focus:outline-none' />
                        </div>
                        <div className="form-control mb-5">
                            <label className='text-black font-semibold mb-3'>Email</label>
                            <input type="email" name="email" placeholder='Email' className='input input-group focus:outline-none' required />
                        </div>
                        <div className="form-control">
                            <label className='text-black font-semibold mb-3'>Message</label>
                            <textarea placeholder="Message" name='message' className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                        </div>
                        <button type='submit' className='btn mt-5 w-full font-bold text-base md:text-lg'>submit</button>
                    </form>
                </div>
                <img className='md:w-1/2' src={mailSend} alt="" />
            </div>
        </div>
    );
};

export default Contact;