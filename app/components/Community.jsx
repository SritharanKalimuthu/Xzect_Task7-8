import Image from 'next/image';
import demoimage from "../assets/Images/demos.png";
import cta from "../assets/Images/cta-bg.png"

const Community = () => {
  return (
    <section>
    <div className="relative my-8">
        <Image src={cta} alt='' className='absolute bg-light bg-center w-full'/>
    </div>
      <div className="container lg:w-4/5 mx-auto pt-28">
        <div className="flex justify-center">
          <div className="w-4/5">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-center border-0 my-5 rounded-lg relative overflow-hidden py-12">
              <div className="absolute inset-0 z-0 lg:block hidden">
                <Image src={demoimage} alt=''/>
              </div>
              <div className="relative z-10 p-8 sm:p-10">
                <div className="flex justify-center">
                  <div className="max-w-3xl text-center">
                    <div className="p-3">
                      <h2 className="text-white mb-4 font-semibold text-2xl sm:text-3xl mb-4">Join our Growing Community</h2>
                      <p className="text-white mb-8 pb-3">
                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                      </p>
                      <button
                        href="#"
                        className="btn btn-light rounded-full px-12 py-4 font-semibold text-blue-700 bg-white text-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-600"
                      >
                        Sign Up for free
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
