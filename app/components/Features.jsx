import Image from 'next/image';
import featureimage1 from '../assets/Images/desk1.jpg';
import featureimage2 from '../assets/Images/desk2.jpg';
import dotimage from '../assets/Images/dot-img.png'

const Features = () => {
  return (
    <section className="section bg-gray-100 mt-12 py-12" id="features">
      <div className="container mx-auto px-4 lg:px-24">
        <div className="flex justify-center mb-12">
          <div className="lg:w-2/3 text-center">
            <h2 className="font-semibold text-3xl mb-4">Our Features</h2>
            <p className="text-gray-500 leading-relaxed">
              Embrace authenticity with Qexal's robust tools. Showcase your unique journey with precision and integrity,
              ensuring every detail reflects your true self.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap items-center lg:px-24 py-16  my-12">
          <div className="md:w-5/12 order-2 md:order-1 mt-5 md:mt-0">
            <h2 className="text-3xl mb-4 font-medium leading-relaxed">
              Perfect Solution For Small Businesses
            </h2>
            <p className="text-gray-500 mb-5">
              Achieve comprehensive coverage with ProfileBuilder's thorough profile creation process. From personal
              achievements to professional milestones, capture the entirety of your story seamlessly.
            </p>
            <a
              href="#"
              className="text-sm w-40 flex btn bg-blue-600 text-white font-semibold rounded-sm px-3 py-2"
            >
              Find out more
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
                className="feather feather-arrow-right ml-2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
          <div className="md:w-6/12 md:ml-auto order-1 md:order-2 mb-24">
            <div className="relative">
              <div className="ml-5">
                <Image
                  src={featureimage1}
                  alt=""
                  className="img-fluid mx-auto rounded-lg shadow-lg relative z-10"
                />
              </div>
              <Image
                src={dotimage}
                alt=""
                className="img-fluid mx-auto opacity-50 absolute mt-12 top-1/2 z-0"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap items-center lg:px-24 py-16 my-12">
          <div className="md:w-6/12 mb-5 md:mb-0 mb-24">
            <div className="relative">
              <div className="mr-5">
                <Image
                  src={featureimage2}
                  alt=""
                  className="img-fluid mx-auto rounded-lg shadow-lg relative z-10"
                />
              </div>
              <Image
                src={dotimage}
                alt=""
                className="img-fluid mx-auto opacity-50 absolute mt-12 top-1/2 right-0 z-0"
              />
            </div>
          </div>
          <div className="md:w-5/12 md:ml-auto">
            <h2 className="text-3xl mb-4 font-medium leading-relaxed">
              Build community & conversion with our suite of social tools
            </h2>
            <p className="text-gray-500 mb-5">
              Innovate your narrative with ProfileBuilder's innovative approach. Harness cutting-edge technology to
              transform your profile into a compelling narrative that captivates and inspires.
            </p>
            <a
              href="#"
              className="text-sm w-40 flex btn bg-blue-600 text-white font-semibold rounded-sm px-3 py-2"
            >
              Find out more
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
                className="feather feather-arrow-right ml-2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
