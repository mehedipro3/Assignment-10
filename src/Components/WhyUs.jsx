const WhyUs = () => {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
          Why Choose Our Visa Navigator?
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Discover a seamless visa application experience tailored to your needs.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-16 h-16 text-white rounded-full">
           
              <img src="https://static.vecteezy.com/system/resources/previews/036/194/476/non_2x/global-reach-icon-line-illustration-vector.jpg" alt="" />
            
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-800">Global Reach</h3>
          <p className="mt-2 text-sm text-gray-600">
            Support for visa applications in over 100+ countries worldwide.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-16 h-16  text-white rounded-full">
            
              <img src="https://media.licdn.com/dms/image/v2/C4D0BAQESk4tQKBF5dg/company-logo_200_200/company-logo_200_200/0/1630512757494/secure_systems_llc_logo?e=2147483647&v=beta&t=SkjRfQxB0kNZ71H9ODfyeV9rKAOqXsxdClQGHkyNodU" alt="" />
           
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-800">Secure System</h3>
          <p className="mt-2 text-sm text-gray-600">
            Your personal data is safe with our industry-leading encryption.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-16 h-16  text-white rounded-full">
            <img src="https://analytik.co.uk/wp-content/uploads/2019/07/faster-processing-icon-200px-300x300.png" alt="" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-800">Fast Processing</h3>
          <p className="mt-2 text-sm text-gray-600">
            Get your visa processed quickly without any hassle.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full">
            <img src="https://img.freepik.com/premium-vector/support-service-icon-customer-consultation-hotline-call-center-help_595882-539.jpg" alt="" />
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-800">24/7 Support</h3>
          <p className="mt-2 text-sm text-gray-600">
            Our team is here to assist you anytime, anywhere.
          </p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="px-6 py-2 bg-blue-500 text-white rounded-md text-lg hover:bg-blue-600 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default WhyUs;
