import Image from 'next/image';
import supportimage from "../assets/Images/support-bench.png"

const Contact = () => {
  return (
    <section className="my-32 px-4 py-8" id="contact">
      <div className="container lg:w-4/6 mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="font-bold mb-4 text-3xl text-gray-800">Get in Touch</h2>
            <p className="text-gray-500 mb-5 text-sm">Have questions or need assistance? Get in touch with us—we&apos;re here to help you every step of the way!</p>

            <div>
              <form method="post" name="myForm" className="text-sm">
                <p id="error-msg"></p>
                <div id="simple-msg"></div>
                <div className="flex flex-wrap -mx-2">
                  <div className="w-full lg:w-1/2 px-2 mb-4">
                    <label htmlFor="name" className="text-gray-500 form-label mb-2">Name</label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      className="form-input p-3 bg-gray-100 text-gray-700 w-full"
                      placeholder="Enter name*"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 px-2 mb-4">
                    <label htmlFor="email" className="text-gray-500 form-label mb-2">Email</label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      className="form-input p-3 bg-gray-100 text-gray-700 w-full"
                      placeholder="Enter email*"
                    />
                  </div>
                  <div className="w-full px-2 mb-4">
                    <label htmlFor="subject" className="text-gray-500 form-label mb-2">Subject</label>
                    <input
                      type="text"
                      className="form-input p-3 bg-gray-100 text-gray-700 w-full"
                      id="subject"
                      name="subject"
                      placeholder="Enter Subject.."
                    />
                  </div>
                  <div className="w-full px-2 mb-4 pb-2">
                    <label htmlFor="comments" className="text-gray-500 form-label mb-2">Message</label>
                    <textarea
                      name="comments"
                      id="comments"
                      rows="4"
                      className="form-textarea p-3 bg-gray-100 text-gray-700 w-full"
                      placeholder="Enter message..."
                    ></textarea>
                  </div>
                  <div className="w-full px-2">
                    <button type="submit" id="submit" name="send" className="bg-blue-600 text-white px-12 py-4 rounded-sm font-semibold text-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-600">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="w-full lg:w-5/12 lg:ml-auto">
            <div className="mt-5 lg:mt-0 text-sm">
              <Image src={supportimage} alt="Support Bench" className="img-fluid d-block" />
              <p className="text-gray-500 mt-5 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Support@info.com
              </p>
              <p className="text-gray-500 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +91 123 4556 789
              </p>
              <p className="text-gray-500 mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                2976 Edwards Street Rocky Mount, NC 27804
              </p>
                <ul className="flex pt-4 text-slate-500 ">
                    <li className="w-8 h-8 rounded-full p-2 bg-gray-200 mr-8 hover:bg-blue-600 hover:text-white">
                        <a href="#" className="">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4"
                        >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                        </a>
                    </li>
                    <li className="w-8 h-8 rounded-full p-2 bg-gray-200 mr-8 hover:bg-blue-600 hover:text-white">
                        <a href="#" >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4"
                        >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        </svg>
                        </a>
                    </li>
                    <li className="w-8 h-8 rounded-full p-2 bg-gray-200 hover:bg-blue-600 hover:text-white mr-8">
                        <a href="#" className='hover:text-white'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4"
                        >
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        </a>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
