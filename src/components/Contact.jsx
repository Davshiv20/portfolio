import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import wave_haikei_f from '../assets/wave_haikei_f.svg'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("sending msg")
    emailjs.sendForm('service_72tmz15', 'template_k3app9g', form.current, 'gvOOoNvYoW_77TQYi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
          console.log("not");
      });
      e.target.reset();
  };

  return (
    <div id="contact" >
    <div className='w-full items-center text-white p-12'>
        <div className="text-white ">
            <h1 className='text-6xl  font-bold text-center'>Contact me!</h1>
            <p className='text-gray-600 text-center text-xl p-2'>Any queries or Suggestions? or Project Collaborations are welcome!</p>
        <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto mt-10 p-6 bg-gray-800 rounded-md">
            <label className="block mb-2 text-lg font-semibold text-gray-300">Name</label>
            <input type="text" name="user_name" className="w-full p-2 mb-4 bg-gray-700 text-white border border-gray-600 rounded" />

            <label className="block mb-2 text-lg font-semibold text-gray-300">Email</label>
            <input type="email" name="user_email" className="w-full p-2 mb-4 bg-gray-700 text-white border border-gray-600 rounded" />

            <label className="block mb-2 text-lg font-semibold text-gray-300">Message</label>
            <textarea name="message" className="w-full p-2 mb-4 bg-gray-700 text-white border border-gray-600 rounded"></textarea>

            <input type="submit" value="Send" className="w-full py-2 px-4 bg-[#00df9a] hover:bg-blue-600 text-white font-semibold rounded cursor-pointer" />
        </form>
        </div>
        
    </div>
    <img
        src={wave_haikei_f}
        alt="wave"
        className="w-full"
        />
    </div>
  );
};

export default Contact;
