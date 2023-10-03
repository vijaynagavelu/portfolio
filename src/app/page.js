'use client';
import Image from 'next/image'
import sample from '../assets/click_here.png';
import budget from '../assets/budgetapp.png';
import cash from '../assets/cashapp.png';
import movies from '../assets/movies.png';
import todo from '../assets/todoapp.png';
import swiggy from '../assets/swiggyapp.png';
import whatsup from '../assets/whatsup.png';

import React, { useEffect, useState } from 'react';


export default function Home() {

  const [displayText, setDisplayText] = useState('');
  const [timer, setTimer] = useState(false);
  const fullName = "Frontend Developer";

  useEffect(() => {
    setTimer(true);
    let index = 0;
    if (timer) {
      setInterval(() => {
        const intervalId = setInterval(() => {
          if (index < fullName.length && timer) {
            setDisplayText(fullName.substring(0, index + 1));
            index++;
          } else {
            clearInterval(intervalId);
          }
        }, 400); // Adjust the interval speed as needed

        return () => clearInterval(intervalId);
      }, 500);
    }
  }, [timer]);


  return (
    <main>

      <div className="video-container">
        <video autoPlay loop muted>
          <source src="/Galaxy4K.mp4" type="video/mp4" />
        </video>
      </div>


      <div className="flex page1 flex-col relative z-100 text-white text-center md:h-screen bg-black bg-opacity-40 ">
        <nav className=" navBar p-8">
          <div className="container mx-auto flex flex-col gap-4 md:flex-row justify-between items-center">
            <div className="flex flex-col gap-12 md:flex-row items-center">
              <a href="#"
                className={`${timer ? 'translate-x-3' : ''} transition-all duration-[1000ms] text-white text-2xl font-semibold`}>Port<span className='text-cyan-300 '>folio.</span></a>
            </div>

            <div className="flex items-center ">
              <a
                href="#"
                className={`btn-link relative hover:bg-cyan-300 ${timer ? 'opacity-100 ' : ''}  transition-all duration-[200ms] opacity-0`}
              >
                <svg width="100" height="45" className="absolute ">
                  <defs>
                    <linearGradient id="grad1">
                      <stop offset="0%" stopColor="#FF8282" />
                      <stop offset="100%" stopColor="#E178ED" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="5" y="5" rx="18"
                    fill="none"
                    className="svg-rect   stroke-4 stroke-dash-453-0 transition-all duration-500"
                    width="90"
                    height="35"
                  ></rect>
                </svg>
                <span >About</span>
              </a >
              <a
                href="#"
                className={`btn-link relative hover:bg-cyan-300 ${timer ? 'opacity-100 -translate-y-0' : 'translate-y-20'}  transition-all duration-[600ms] opacity-0`}
              >
                <svg width="100" height="45" className="absolute ">
                  <defs>
                    <linearGradient id="grad1">
                      <stop offset="0%" stopColor="#FF8282" />
                      <stop offset="100%" stopColor="#E178ED" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="5" y="5" rx="18"
                    fill="none"
                    className="svg-rect   stroke-4 stroke-dash-453-0 transition-all duration-500"
                    width="90"
                    height="35"
                  ></rect>
                </svg>
                <span >Contact</span>
              </a >
              <a
                href="#"
                className={`btn-link relative hover:bg-cyan-300 ${timer ? 'opacity-100 -translate-y-0' : 'translate-y-20'}  transition-all duration-[1000ms] opacity-0`}
              >
                <svg width="100" height="45" className="absolute ">
                  <defs>
                    <linearGradient id="grad1">
                      <stop offset="0%" stopColor="#FF8282" />
                      <stop offset="100%" stopColor="#E178ED" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="5" y="5" rx="18"
                    fill="none"
                    className="svg-rect   stroke-4 stroke-dash-453-0 transition-all duration-500"
                    width="90"
                    height="35"
                  ></rect>
                </svg>
                <span >Skills</span>
              </a >
              <a
                href="#"
                className={`btn-link relative hover:bg-cyan-300 ${timer ? 'opacity-100 -translate-y-0' : 'translate-y-20'}  transition-all duration-[1400ms] opacity-0`}
              >
                <svg width="100" height="45" className="absolute ">
                  <defs>
                    <linearGradient id="grad1">
                      <stop offset="0%" stopColor="#FF8282" />
                      <stop offset="100%" stopColor="#E178ED" />
                    </linearGradient>
                  </defs>
                  <rect
                    x="5" y="5" rx="18"
                    fill="none"
                    className="svg-rect  stroke-4 stroke-dash-453-0 transition-all duration-500"
                    width="90"
                    height="35"
                  ></rect>
                </svg>
                <span >Projects</span>
              </a >
            </div>
          </div>
        </nav>

        <div className='flex grow content'>
          <div className="container  mx-auto py-8 flex flex-col gap-12 md:flex-row justify-center items-center px-4">
            {/* Left Column (Personal Details) */}
            <div className=" basis-1/2 text-center md:text-left pb-4 md:pb-0">
              <h1 className={`${timer ? 'opacity-100 translate-y-0' : ''} text-xl font-bold pb-1 opacity-0 -translate-y-20  transition-all duration-700`}>Hello, It&rsquo;s me</h1>
              <p className={`${timer ? 'opacity-100 translate-x-0' : ''} text-3xl font-bold opacity-0 -translate-x-20 transition-all duration-[1000ms]`}> Vijay </p>
              <p className={`${timer ? 'opacity-100 -translate-y-0' : ''} text-xl font-semibold opacity-0 translate-y-20 transition-all duration-700`}>And I am a <span className='text-cyan-300'>{displayText}</span></p>
              <p className={`${timer ? 'opacity-100 -translate-y-0' : ''} text-gray-300 text-sm opacity-0 translate-y-20 transition-all duration-[1000ms]`}> I&rsquo;m a passionate learner, eager to explore and grow in the world of web development. I&rsquo;m currently building my skills in React.js, Next.js, and other technologies, with a focus on website design and frontend development</p>
              <div className={`flex justify-center md:justify-start icons cursor-pointer gap-2 text-gray-400 py-4`}>

                <a className={`facebook transition-transform hover:scale-125`} href='https://www.youtube.com/watch?v=VI1Kvv4g270'>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${timer ? 'opacity-100 -translate-x-0 ' : 'translate-x-20'}  transition-all duration-[1000ms] opacity-0`} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="cyan" fill="cyan" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
                  </svg>
                </a>

                <a className={`insta transition-transform hover:scale-125`} href='https://www.youtube.com/watch?v=VI1Kvv4g270'>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${timer ? 'opacity-100 -translate-x-0 ' : 'translate-x-32'}  transition-all duration-[1200ms] opacity-0`} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="cyan" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path>
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M16.5 7.5l0 .01"></path>
                  </svg>
                </a>

                <a className={`github transition-transform hover:scale-125`} href='https://www.youtube.com/watch?v=VI1Kvv4g270'>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${timer ? 'opacity-100 -translate-x-0 ' : 'translate-x-52'}  transition-all duration-[1400ms] opacity-0`} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="cyan" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
                  </svg>
                </a>

                <a className={`linkedIn transition-transform hover:scale-125`} href='https://www.youtube.com/watch?v=VI1Kvv4g270'>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`${timer ? 'opacity-100 -translate-x-0 ' : 'translate-x-72'}  transition-all duration-[1600ms] opacity-0`} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="cyan" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                  </svg>
                </a>

                <a className={`twitter transition-transform hover:scale-125`} href='https://www.youtube.com/watch?v=VI1Kvv4g270'>

                  <svg xmlns="http://www.w3.org/2000/svg" className={`${timer ? 'opacity-100 -translate-x-0 ' : 'translate-x-80'}  transition-all duration-[1800ms] opacity-0`} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="cyan" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>

                </a>
              </div>
              <button className={`${timer ? 'opacity-100 -translate-y-0' : ''} opacity-0 translate-y-20 transition-all duration-[1100ms] hover:shadow-[0_1px_20px_rgb(135,196,196,1),0_-1px_20px_rgb(0,255,255,1)] transition duration-500 buttonBackLight  mt-4 bg-cyan-500 text-sm font-semibold text-black py-2 px-4 rounded-full`}>More About Me</button>
            </div>

            {/* Right Column (Picture) */}
            <div className=" md:basis-[28%] relative  md:p-0">
              <div className='flex'>
                {/* Your Picture */}
                <Image src={sample} alt="Your Picture" className="backLight  rounded-full mx-auto relative z-10" />
              </div>
            </div>
          </div>
        </div>
      </div >

      <div className="flex page2 flex-col relative z-100 text-white text-center md:h-screen bg-black bg-opacity-40 ">
        <div className='flex grow content'>
          <div className="container  mx-auto py-8 flex flex-col gap-36 md:flex-row justify-center items-center px-4">
            {/* Left Column (Picture) */}
            <div className=" md:basis-[25%] hidden md:flex relative  md:p-0">
              <div className='flex'>
                <Image src={sample} alt="Your Picture" className="backLight  rounded-full mx-auto relative z-10" />
              </div>
            </div>

            {/* Right Column (Personal Details) */}
            <div className=" basis-1/2 text-center md:text-left pb-4 md:pb-0">
              <p className="text-3xl font-bold pb-2 "> About<span className='text-cyan-300'> Me</span></p>
              <p className="text-xl font-semibold pb-4">Frontend Developer!</p>
              <p className="text-gray-200 text-sm pb-4">
                Hey, I&rsquo;m Vijay, a frontend enthusiast diving into web development. I&rsquo;m passionate about React.js, Next.js, and Tailwind CSS for captivating design. JavaScript powers my interactivity, and HTML/CSS set the stage. I also explore REST APIs to fetch data from the digital realm. Join me on my journey to become a frontend maestro crafting captivating web experiences. 🚀💡💻 #WebDev #FutureFrontendPro
              </p>
              <button className="hover:shadow-[0_1px_20px_rgb(135,196,196,1),0_-1px_20px_rgb(0,255,255,1)] transition duration-500 buttonBackLight  mt-4 bg-cyan-500 text-sm font-semibold text-black py-2 px-4 rounded-full ">More About Me</button>
            </div>
          </div>
        </div>
      </div >

      <div className="flex  page3 flex-col  relative z-100 text-white text-center md:h-screen bg-black bg-opacity-40 ">
        <h1 className='text-3xl font-bold w-full pt-4 pb-2'>Latest<span className='text-cyan-300'> Project</span></h1>

        <div className='flex flex-col grow justify-around'>

          <section className="container mx-auto py-0 flex flex-col gap-12 md:flex-row justify-center items-center px-4">
            <div className="basis-1/3  hover:scale-[1.05] scale-[1] relative md:p-0 transition-all duration-500 ease-in-out">
              <div className='flex w-[94%] '>
                <Image src={budget} alt="Your Picture" className="rounded-lg mx-auto relative z-10" />
              </div>
              <p className='font-bold text-lg'>Budget<span className='text-cyan-300 '>App</span></p>
            </div>

            <div className="basis-1/3  hover:scale-[1.05] scale-[1]  relative  md:p-0 transition-all duration-500 ease-in-out">
              <div className='flex'>
                <Image src={movies} alt="Your Picture" className="  rounded-lg mx-auto relative z-10" />
              </div>
              <p className='font-bold text-lg'>Movies<span className='text-cyan-300 '>Page</span></p>
            </div>

            <div className="basis-1/3  hover:scale-[1.05] scale-[1]  relative  md:p-0 transition-all duration-500 ease-in-out">
              <div className='flex'>
                <Image src={whatsup} alt="Your Picture" className="  rounded-lg mx-auto relative z-10" />
              </div>
              <p className='font-bold text-lg'>Whatsup<span className='text-cyan-300 '>App</span></p>
            </div>
          </section>

          <section className="container mx-auto py-0 flex flex-col gap-12 md:flex-row justify-center items-center px-4">
            <div className="basis-1/3  hover:scale-[1.05] scale-[1]  relative  md:p-0 transition-all duration-500 ease-in-out">
              <div className='flex'>
                <Image src={swiggy} alt="Your Picture" className="rounded-lg mx-auto relative z-10" />
              </div>
              <p className='font-bold text-lg'>SwiggyClone<span className='text-cyan-300 '>App</span></p>
            </div>

            <div className="basis-1/3  hover:scale-[1.05] scale-[1]  relative  md:p-0 transition-all duration-500 ease-in-out">
              <div className='flex'>
                <Image src={cash} alt="Your Picture" className="  rounded-lg mx-auto relative z-10" />
              </div>
              <p className='font-bold text-lg'>Interactive<span className='text-cyan-300 '>Page</span></p>
            </div>

            <div className="basis-1/3  hover:scale-[1.05] scale-[1]  relative  md:p-0 transition-all duration-500 ease-in-out">
              <div className='flex'>
                <Image src={todo} alt="Your Picture" className="  rounded-lg mx-auto relative z-10" />
              </div>
              <p className='font-bold text-lg'>Todo<span className='text-cyan-300 '>App</span></p>
            </div>
          </section>

        </div>
      </div >

      <div className="flex page4 flex-col relative z-100 text-white text-center md:h-screen bg-black bg-opacity-40 ">

        <section className='flex grow content'>
          <div className="container mx-auto py-8 flex flex-col gap-12 md:flex-row justify-center items-center px-4">
            {/* Left Column (Personal Details) */}
            <div className=" basis-1/2 text-center md:text-left pb-4 md:pb-0">
              <div className='flex justify-center'>
                <h1 className="text-xl font-bold pb-4">Contact <span className='text-cyan-300'>Me</span></h1>
              </div>
              <p className="text-md font-semibold pb-2">Let&rsquo;s Work Together </p>
              <p className="text-gray-300 text-sm pb-6"> I&rsquo;m a passionate learner, eager to explore and grow in the world of web development. I&rsquo;m currently building my skills in React.js, Next.js, and other technologies, with a focus on website design and frontend development</p>

              <div className="flex justify-center md:justify-start gap-1 text-base font-semibold pb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-send" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="cyan" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 14l11 -11"></path>
                  <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                </svg>
                <p>vijaynaga.0503@gmail.com</p>
              </div>
              <div className="flex justify-center md:justify-start gap-1  text-base font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="cyan" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                  <path d="M15 7a2 2 0 0 1 2 2"></path>
                  <path d="M15 3a6 6 0 0 1 6 6"></path>
                </svg>
                <p>+91 9952094454</p>
              </div>

              <div className="flex justify-center md:justify-start icons cursor-pointer gap-2 text-gray-400 py-4">

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
            </div>

            {/* Right Column (Contact) */}
            <div className="flex basis-1/2 w-full  grow text-center md:text-left pb-4 md:pb-0">
              <form className='flex flex-col gap-2 grow' action="https://submit-form.com/xXQd8jgZ">
                <input
                  type="hidden"
                  name="_redirect"
                  value="http://localhost:3000/"
                />
                <input name="name" className='p-2 rounded-md bg-stone-600 ' placeholder='Enter Your Name' />
                <input name="email" className='p-2 rounded-md bg-stone-600 ' placeholder='Enter Your Email' />
                <textarea name="message" className='p-2 rounded-md h-24 md:h-40 bg-stone-600 mb-4 md:mb-16' placeholder='Enter Your Message'></textarea>

                <button type="submit" className="hover:shadow-[0_1px_20px_rgb(135,196,196,1),0_-1px_20px_rgb(0,255,255,1)] transition duration-500 buttonBackLight  mt-4 bg-cyan-500 text-sm font-semibold text-black py-2 px-4 rounded-full ">Submit</button>
              </form>
            </div>
          </div>
        </section>

        <footer className="flex justify-center bg-cyan-800  p-3 ">
          <p>
            Developed with love by Vijay Nagavelu 	&copy; 2023
          </p>
        </footer>

      </div >

    </main >
  )
}
