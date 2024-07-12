import Image from 'next/image';
import React from 'react';
import developer from '../assets/Images/team/1.jpg';
import ceo from '../assets/Images/team/2.jpg';
import designer from '../assets/Images/team/3.jpg';
import developer2 from '../assets/Images/team/4.jpg';

const Team = () => {
  const teamMembers = [
    { name: 'Frances Thompson', role: 'Developer', image:developer },
    { name: 'John Jones', role: 'CEO', image:ceo  },
    { name: 'Della Hobbs', role: 'Designer', image: designer },
    { name: 'Troy Jordan', role: 'Developer', image: developer2 },
  ];

  return (
    <section className="bg-light py-20" id="team">
      <div className="container lg:w-4/5 mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl text-gray-800">Our Team Members</h2>
          <p className="text-gray-500 mt-2 text-sm">
            From expert developers to creative designers and helpful support staff, we&apos;re here to ensure your success every step of the way.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mx-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-box relative overflow-hidden rounded text-center shadow-lg">
              <div className="relative overflow-hidden team">
                <Image src={member.image} alt={member.name} className="w-full h-auto mx-auto" width={300} height={300} />
                <ul className="list-none p-6 m-0 team-social-item w-full absolute flex justify-evenly space-x-4 bg-opacity-50 bg-black team-social-item">
                  <li>
                    <a href="#" className="text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-4">
                <h5 className="font-semibold text-lg mb-1 text-gray-800">{member.name}</h5>
                <p className="text-gray-500 uppercase mb-0 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
