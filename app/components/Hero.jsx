import React from 'react';
import  hero from '../assets/Images/hero.png'
import Image from 'next/image';
import backgroundImage from '../assets/Images/pattern-bg.png';

const Hero = () => {
  return (
    <section className="w-full flex justify-center bg-center relative overflow-hidden px-12 md:px-32 lg:pb-24" id="home">
      <div className="lg:w-4/5 ">
        <div className="absolute -z-10 w-full">
          <Image src={backgroundImage} alt=''/>
        </div>
        <div className="container mx-auto mt-36">
          <div className="flex flex-col lg:flex-row mt-24">
            <div className="lg:w-2/4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="my-10"
              >
                <path d="M17 18a5 5 0 0 0-10 0"></path>
                <line x1="12" y1="2" x2="12" y2="9"></line>
                <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line>
                <line x1="1" y1="18" x2="3" y2="18"></line>
                <line x1="21" y1="18" x2="23" y2="18"></line>
                <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line>
                <line x1="23" y1="22" x2="1" y2="22"></line>
                <polyline points="8 6 12 2 16 6"></polyline>
              </svg>
              <h1 className="text-slate-800 font-medium mb-4 text-5xl leading-tight">
                Get Your Professional Website Done With <b>Qexal</b>
              </h1>
              <p className="mb-5 text-gray-500 leading-loose font-normal">
                Create your profile today and let your story unfold. Whether you&apos;re showcasing your
                professional achievements or sharing personal passions, ProfileBuilder is your canvas.
              </p>
              <button
                href="#"
                className="w-40 btn bg-blue-600 hover:bg-blue-700 text-white rounded-sm text-sm font-semibold px-4 py-2 flex items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-600"
              >
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
            <div className="lg:absolute lg:w-3/6 right-0 sm:w-10/12 mx-auto lg:ml-auto lg:mr-0">
              <div className="mt-5 lg:mt-0">
                <Image src={hero} alt='' className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero
