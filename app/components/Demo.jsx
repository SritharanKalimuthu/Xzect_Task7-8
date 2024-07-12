import Image from "next/image";
import demoimage from "../assets/Images/demos.png"

const Demo = () => {
  return (
    <section className="relative py-20 px-4 md:p-20 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="absolute inset-0 overflow-hidden">
            <Image src={demoimage} alt="" className="md:block hidden"/>
        </div>
        <div className="container lg:w-4/5 mx-auto relative z-10">
        <div className="flex justify-center">
            <div className="lg:w-2/3">
            <div className="text-center py-4">
                <h1 className="text-white mb-4 font-bold text-4xl">Build your dream website today</h1>
                <p className="text-white mb-16 px-12 md:px-30">
                Join a community where every voice is heard and every story cherished. Experience a platform where
                diversity thrives and connections flourish, embracing authenticity and shared experiences.
                </p>
                <button href="#" className="text-blue-600 px-12 py-4 btn btn-lg bg-white rounded-sm text-primary text-md font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-600">
                Ask for Demonstration
                </button>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Demo

