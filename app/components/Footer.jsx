import Image from 'next/image';
import logo from '../assets/Images/logo-light.png';
import dottedimage from '../assets/Images/dotted-world.png'

const Footer = () => {
  const sections = [
    {
      title: "Customer",
      links: ["Works", "Strategy", "Releases", "Press", "Mission"],
    },
    {
      title: "Product",
      links: ["Trending", "Popular", "Customers", "Features"],
    },
    {
      title: "Information",
      links: ["Developers", "Support", "Customer Service", "Get Started", "Guide"],
    },
    {
      title: "Support",
      links: ["FAQ", "Contact", "Discussion"],
    },
  ];

  return (
    <footer className="bg-[#29344a] px-4 lg:px-40 py-12 flex justify-center">
      <div className="container lg:w-4/5">
        <div className="relative">
            <Image src={dottedimage} alt='' className='absolute z-[0]'/>
        </div>
        <div className="relative flex flex-col lg:flex-row my-4 py-5 z-[1]">
          <div className=" mb-4 lg:mr-12 pr-1 lg:pr-24 ">
            <a href="#">
              <Image
                src={logo}
                alt="Logo"
                width={100}
              />
            </a>
            <p className="text-gray-400 my-4 text-md">
              Showcasing your professional achievements or sharing personal passions, Qexal is your canvas.
            </p>
          </div>
          <div className="ml-6 lg:ml-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {sections.map((section) => (
                <div key={section.title} className="mt-4 mr-16">
                  <h4 className="text-white font-semibold mb-3 text-md">
                    {section.title}
                  </h4>
                  <ul className="text-gray-400 text-sm text-nowrap">
                    {section.links.map((link) => (
                      <li key={link} className='mb-4 hover:translate-x-2 transition-all duration-200'>
                        <a href="#" className="hover:text-white">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <div className="text-center mt-2">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Qexal. Design By Srithar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
