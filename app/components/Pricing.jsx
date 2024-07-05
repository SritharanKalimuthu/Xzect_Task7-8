"use client"
import Image from "next/image";
import React,{ useState } from "react";
import image1 from '../assets/Images/pricing/1.png'
import image2 from '../assets/Images/pricing/2.png'
import image3 from '../assets/Images/pricing/3.png'


const Pricing = () => {

    const [activeTab, setActiveTab] = useState('monthly');

  return (
    <section className="my-20 py-20" id="pricing">
      <div className="container mx-auto">
        <div className="flex justify-center mb-12">
          <div className="lg:w-7/12 text-center">
            <h2 className="text-3xl text-slate-800 font-semibold mb-4">Pricing Plan</h2>
            <p className="text-gray-500 mt-2 text-sm lg:px-20">
              Simple, flexible pricing for all your website needs. Choose the plan that fits you best and start building your online presence today!
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-4">
            <ul className="flex space-x-1 rounded-full shadow-sm p-1 bg-gray-100">
                <li>
                <button
                    className={`text-md inline-block px-6 py-2 rounded-full font-medium ${activeTab === 'monthly' ? 'bg-blue-600 text-white' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('monthly')}
                >
                    Monthly
                </button>
                </li>
                <li>
                <button
                    className={` text-md inline-block px-6 py-2 rounded-full font-medium ${activeTab === 'yearly' ? 'bg-blue-600 text-white' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('yearly')}
                >
                    Yearly
                </button>
                </li>
            </ul>
        </div>
        <div className="px-8 lg:px-28">
            {activeTab === 'monthly' && (
                <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-1/3 px-4">
                    <div className="bg-white mt-4 rounded text-center shadow-lg overflow-hidden">
                    <div className="flex flex-col items-center p-6 text-sm py-12">
                        <div className="mb-5">
                        <Image src={image1} alt="" className="img-fluid d-block bg-blue-100 rounded-md p-2" />
                        </div>
                        <h4 className="text-gray-800 uppercase mb-4 pb-1 font-medium text-2xl mb-4">Basic</h4>
                        <p className="text-gray-500 mb-4">Onlinespace: <span className="font-bold">50MB</span></p>
                        <p className="text-gray-500 mb-4">Support: <span className="font-bold">No</span></p>
                        <p className="text-gray-500 mb-4 pb-1">Domain 1</p>
                        <p className="text-gray-500 mb-2">All Extension Included</p>
                        <p className="font-medium mb-4 text-lg">$9.00 / Month</p>
                        <a href="#" className="btn rounded-sm px-6 py-2 font-medium bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white">Buy Now</a>
                    </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 px-4">
                    <div className="bg-white mt-4 rounded text-center shadow-lg overflow-hidden">
                    <div className="relative flex flex-col items-center p-6 text-sm py-12">
                        <span className="badge bg-blue-500 shadow-lg text-sm text-white font-semibold popularity-badge z-10">Most Popular</span>
                        <div className="mb-5">
                        <Image src={image1} alt="" className="img-fluid d-block bg-blue-100 rounded-md p-2" />
                        </div>
                        <h4 className="text-gray-800 uppercase mb-4 pb-1 font-medium text-2xl mb-4">Standard</h4>
                        <p className="text-gray-500 mb-4">Onlinespace: <span className="font-bold">100MB</span></p>
                        <p className="text-gray-500 mb-4">Support: <span className="font-bold">Yes</span></p>
                        <p className="text-gray-500 mb-4 pb-1">Domain 1</p>
                        <p className="text-gray-500 mb-2">All Extension Included</p>
                        <p className="font-medium mb-4 text-lg">$39.00 / Month</p>
                        <a href="#" className="btn rounded-sm px-6 py-2 font-medium bg-blue-500 text-white">Buy Now</a>
                    </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 px-4">
                    <div className="bg-white mt-4 rounded text-center shadow-lg overflow-hidden">
                    <div className="flex flex-col items-center p-6 text-sm py-12">
                        <div className="mb-5">
                        <Image src={image2} alt="" className="img-fluid d-block mx-auto p-2 bg-blue-100 rounded-md "/>
                        </div>
                        <h4 className="text-gray-800 uppercase mb-4 pb-1 font-medium text-2xl mb-4">Premium</h4>
                        <p className="text-gray-500 mb-4">Onlinespace: <span className="font-bold">200MB</span></p>
                        <p className="text-gray-500 mb-4">Support: <span className="font-bold">No</span></p>
                        <p className="text-gray-500 mb-4 pb-1">Domain 1</p>
                        <p className="text-gray-500 mb-2">All Extension Included</p>
                        <p className="font-medium mb-4 text-lg">$79.00 / Month</p>
                        <a href="#" className="btn rounded-sm px-6 py-2 font-medium bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white">Buy Now</a>
                    </div>
                    </div>
                </div>
                </div> )}
            {activeTab=='yearly'&&(
                <div className="flex flex-wrap -mx-4 py-12">
                <div className="w-full lg:w-1/3 px-4">
                    <div className="bg-white mt-4 rounded text-center shadow-lg overflow-hidden">
                    <div className="flex flex-col items-center p-6 text-sm py-12">
                        <div className="mb-5">
                        <Image src={image3} alt="" className="img-fluid d-block bg-blue-100 rounded-md p-2" />
                        </div>
                        <h4 className="text-gray-800 uppercase mb-4 pb-1 font-medium text-2xl mb-4">Basic</h4>
                        <p className="text-gray-500 mb-4">Onlinespace: <span className="font-bold">50MB</span></p>
                        <p className="text-gray-500 mb-4">Support: <span className="font-bold">No</span></p>
                        <p className="text-gray-500 mb-4 pb-1">Domain 1</p>
                        <p className="text-gray-500 mb-2">All Extension Included</p>
                        <p className="font-medium mb-4 text-lg">$29.00 / Year</p>
                        <a href="#" className="btn rounded-sm px-6 py-2 font-medium bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white">Buy Now</a>
                    </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 px-4">
                    <div className="bg-white mt-4 rounded text-center shadow-lg overflow-hidden">
                    <div className="flex flex-col items-center p-6 text-sm py-12">
                        <div className="mb-5">
                        <Image src={image2} alt="" className="img-fluid d-block bg-blue-100 rounded-md p-2" />
                        </div>
                        <h4 className="text-gray-800 uppercase mb-4 pb-1 font-medium text-2xl mb-4">Standard</h4>
                        <p className="text-gray-500 mb-4">Onlinespace: <span className="font-bold">100MB</span></p>
                        <p className="text-gray-500 mb-4">Support: <span className="font-bold">Yes</span></p>
                        <p className="text-gray-500 mb-4 pb-1">Domain 1</p>
                        <p className="text-gray-500 mb-2">All Extension Included</p>
                        <p className="font-medium mb-4 text-lg">$49.00 / Year</p>
                        <a href="#" className="btn rounded-sm px-6 py-2 font-medium bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white">Buy Now</a>
                    </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/3 px-4">
                    <div className="bg-white mt-4 rounded text-center shadow-lg overflow-hidden">
                    <div className="relative flex flex-col items-center p-6 text-sm py-12">
                        <span className="badge bg-blue-500 shadow-lg text-sm text-white font-semibold popularity-badge z-10">Most Popular</span>
                        <div className="mb-5">
                        <Image src={image3} alt="" className="img-fluid d-block bg-blue-100 rounded-md p-2" />
                        </div>
                        <h4 className="text-gray-800 uppercase mb-4 pb-1 font-medium text-2xl mb-4">Premium</h4>
                        <p className="text-gray-500 mb-4">Onlinespace: <span className="font-bold">200MB</span></p>
                        <p className="text-gray-500 mb-4">Support: <span className="font-bold">No</span></p>
                        <p className="text-gray-500 mb-4 pb-1">Domain 1</p>
                        <p className="text-gray-500 mb-2">All Extension Included</p>
                        <p className="font-medium mb-4 text-lg">$99.00 / Year</p>
                        <a href="#" className="btn rounded-sm px-6 py-2 font-medium bg-blue-500 text-white">Buy Now</a>
                    </div>
                    </div>
                </div>
                </div> 
            )}
        </div>
     </div>
    </section>
  );
};

export default Pricing;
