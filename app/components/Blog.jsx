import Image from 'next/image';
import designer from '../assets/Images/user/img-1.jpg';
import ceo from '../assets/Images/user/img-2.jpg';
import developer from '../assets/Images/user/img-3.jpg';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      category: 'UI & UX Design',
      title: 'Step by step to conduct usability testing',
      description: 'Learn the essential steps to effectively conduct usability testing and enhanced my UI/UX design process using qexal.',
      author: 'John Yeager',
      role: 'Designer, New York',
      imgSrc: designer,
    },
    {
      id: 2,
      category: 'CEO',
      title: 'Increase conversion rate from ad to landing page',
      description: 'Discover proven strategies to boost your conversion rate from ad clicks to landing page engagement.',
      author: 'Berneice Harris',
      role: 'Designer, New York',
      imgSrc: ceo,
    },
    {
      id: 3,
      category: 'Developer',
      title: 'Why small business should start marketing',
      description: 'All businesses must embrace marketing to drive growth and stay competitive in today\'s market.',
      author: 'Sarah Pettway',
      role: 'Designer, New York',
      imgSrc: developer,
    },
  ];

  return (
    <section id="blog" className="mx-4 mt-16 py-5">
      <div className="container mx-auto">
        <div className="flex justify-center mb-4">
          <div className="text-center max-w-2xl">
            <h2 className="font-bold mb-4 text-3xl text-gray-800">Our Blog</h2>
            <p className="text-gray-600 mb-16">
              Your go-to resource for insights on building stunning websites. Stay updated with the latest trends and success stories to inspire your online journey.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mx-4 md:mx-20">
          {blogPosts.map((post) => (
            <div key={post.id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-4">
                  <span className="blog-category text-xs text-blue-700 bg-blue-200 font-semibold mr-2 px-4 py-1 rounded-md mb-4">
                    {post.category}
                  </span>
                  <h4 className="text-xl font-medium my-4 text-gray-800 mb-4 hover:text-blue-700">
                    <a href="#">{post.title}</a>
                  </h4>
                  <p className="text-gray-600 ">{post.description}</p>
                  <div className="flex items-center mt-4 pt-2 mb-4">
                    <Image
                      src={post.imgSrc}
                      className="w-12 h-12 rounded-full mr-3"
                      alt={post.author}
                      width={48}
                      height={48}
                    />
                    <div>
                      <h5 className="font-medium text-base mb-0 text-gray-800">{post.author}</h5>
                      <p className="text-gray-600  mb-0">{post.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
