
const Services = () => {
  return (
    <section className="section my-12 px-4 sm:px-16" id="services">
        <div className="container mx-auto mt-32 text-slate-800">
            <div className="flex justify-center mb-12">
            <div className="lg:w-2/3 text-center">
                <h2 className="font-semibold text-3xl mb-4">Our Services</h2>
                <p className="text-gray-500 leading-relaxed text-center lg:px-48">Unveil your true potential without hesitation. Discover the essence of seamless profile creation with Qexal.</p>
            </div>
            </div>
            <div className="flex flex-wrap">
            <div className="lg:w-1/3 px-4 mb-8">
                <div className="text-center sm:px-12 py-20 relative mb-4 hover:bg-gray-100" style={{borderRadius:'91% 10% 10% 88% / 51% 10% 10% 49%'}}>
                <div className="p-4 flex flex-col items-center">
                    <div className="icon-mono service-icon mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-box"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                    </div>
                    <h4 className="mb-3 font-semibold text-lg">Digital Design</h4>
                    <p className="text-gray-500 mb-0">Our platform empowers you to craft profiles that captivate and inspire.</p>
                </div>
                </div>
            </div>

            <div className="lg:w-1/3 px-4 mb-8">
                <div className=" text-center sm:px-12 py-20 relative mb-4 bg-gray-100" style={{borderRadius:'91% 10% 10% 88% / 51% 10% 10% 49%'}}>
                <div className="p-4 flex flex-col items-center">
                    <div className="icon-mono service-icon mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                    </div>
                    <h4 className="mb-3 font-semibold text-lg">Awesome Support</h4>
                    <p className="text-gray-500 mb-0">Join a community where every detail is meticulously designed to showcase your uniqueness.</p>
                </div>
                </div>
            </div>

            <div className="lg:w-1/3 px-4 mb-8">
                <div className="bg-white text-center sm:px-12 py-20 relative mb-4 hover:bg-gray-100" style={{borderRadius:'91% 10% 10% 88% / 51% 10% 10% 49%'}}>
                <div className="p-4 flex flex-col items-center">
                    <div className="icon-mono service-icon mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-server"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>
                    </div>
                    <h4 className="mb-3 font-semibold text-lg">Easy to customize</h4>
                    <p className="text-gray-500 mb-0">Start your journey with Qexal today and experience innovation in personal branding.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>

  )
}

export default Services
