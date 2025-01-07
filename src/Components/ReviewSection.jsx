const ReviewSection = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
          What Our Clients Say
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Trusted by travelers worldwide, ZVisa makes visa applications simple and stress-free.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Testimonial 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <img
            className="w-16 h-16 rounded-full mb-4 object-cover"
            src="https://img.freepik.com/free-photo/cheerful-african-guy-with-narrow-dark-eyes-fluffy-hair-dressed-elegant-white-shirt_273609-14082.jpg?semt=ais_hybrid"
            alt="John Doe"
          />
          <h3 className="text-lg font-medium text-gray-800">John Doe</h3>
          <p className="text-sm text-blue-500">Travel Blogger</p>
          <p className="mt-4 text-sm text-gray-600 italic">
            &quot;ZVisa helped me get my Schengen visa in record time. The process was smooth and hassle-free!&quot;
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <img
            className="w-16 h-16 rounded-full mb-4 object-cover"
            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
            alt="Sarah Lee"
          />
          <h3 className="text-lg font-medium text-gray-800">Sarah Lee</h3>
          <p className="text-sm text-blue-500">Business Owner</p>
          <p className="mt-4 text-sm text-gray-600 italic">
            &quot;The team at ZVisa is professional and reliable. They guided me through every step of the application.&quot;
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center">
          <img
            className="w-16 h-16 rounded-full mb-4 object-cover"
            src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?semt=ais_hybrid"
            alt="Michael Smith"
          />
          <h3 className="text-lg font-medium text-gray-800">Michael Smith</h3>
          <p className="text-sm text-blue-500">Frequent Traveler</p>
          <p className="mt-4 text-sm text-gray-600 italic">
            &quot;Thanks to ZVisa, I could focus on planning my trip while they handled the paperwork.&quot;
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
