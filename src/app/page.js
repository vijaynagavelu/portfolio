'use client';
import Image from 'next/image'
import sample from '../assets/click_here.jpg';
import React, { useEffect, useState } from 'react';


export default function Home() {

  const [displayText, setDisplayText] = useState('');
  const fullName = "Frontend Developer";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < fullName.length) {
        setDisplayText(fullName.substring(0, index + 1));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Adjust the interval speed as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main>

      <div className="video-container">
        <video autoPlay loop muted>
          <source src="/Galaxy4K.mp4" type="video/mp4" />
        </video>
      </div>


      <div className="flex page1 flex-col relative z-100 text-white text-center md:h-screen bg-black bg-opacity-40 ">

        <nav className=" navBar p-8">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white font-semibold hover:text-blue-300">Portfolio</a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-cyan-300">About</a>
              <a href="#" className="text-white hover:text-cyan-300">Contact</a>
              <a href="#" className="text-white hover:text-cyan-300">Skills</a>
            </div>

          </div>
        </nav>

        <div className='flex grow '>
          <div className="container  mx-auto py-8 flex flex-col gap-12 md:flex-row justify-center items-center px-4">
            {/* Left Column (Personal Details) */}
            <div className="basis-1/2 text-center md:text-left pb-4 md:pb-0">
              <h1 className="text-xl font-bold">Hello, It&rsquo;s me</h1>
              <p className="text-3xl font-bold"> Vijay </p>
              <p className="text-xl font-semibold">And I am a <span className='text-cyan-300'>{displayText}</span></p>
              <p className="text-gray-300 text-sm"> I&rsquo;m a passionate learner, eager to explore and grow in the world of web development. I&rsquo;m currently building my skills in React.js, Next.js, and other technologies, with a focus on website design and frontend development</p>
              <div className="flex icons cursor-pointer gap-2 text-gray-400 py-4">

                <a className='facebook transition-transform hover:scale-125 ' href='https://www.youtube.com/watch?v=VI1Kvv4g270'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="cyan" fill="cyan" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                  </svg>
                </a>

                <a className='insta transition-transform hover:scale-125' href='https://www.youtube.com/watch?v=VI1Kvv4g270'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="cyan" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M16.5 7.5l0 .01"></path>
                  </svg>
                </a>



                <a className='github transition-transform hover:scale-125' href='https://www.youtube.com/watch?v=VI1Kvv4g270'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-twitter" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="cyan" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
                  </svg>
                </a>

                <a className='linkedIn transition-transform hover:scale-125' href='https://www.youtube.com/watch?v=VI1Kvv4g270'>
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="cyan" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                  </svg>
                </a>

                <a className='twitter transition-transform hover:scale-125 ' href='https://www.youtube.com/watch?v=VI1Kvv4g270'>

                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="cyan" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>

                </a>
              </div>
              <button className="buttonBackLight mt-4 bg-cyan-500 text-sm font-semibold text-black py-2 px-4 rounded-full hover:bg-cyan-600">More About Me</button>
            </div>

            {/* Right Column (Picture) */}
            <div className=" md:basis-[28%] relative px-20 md:p-0">
              <div className='flex'>
                {/* Your Picture */}
                <Image src={sample} alt="Your Picture" className="backLight  rounded-full mx-auto relative z-10" />
              </div>
            </div>
          </div>
        </div>

      </div>




    </main>
  )
}
