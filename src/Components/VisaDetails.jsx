import { useLoaderData } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const VisaDetails = () => {
  const visaDetails = useLoaderData();

  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden border my-4">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <img
              src={visaDetails.country_image}
              alt={visaDetails.country_name}
              className="w-16 h-16 rounded-full mr-4 object-cover"
            />
            <div>
              <h3 className="text-lg font-bold">{visaDetails.country_name}</h3>
              <p className="text-sm text-gray-600">{visaDetails.visa_type}</p>
            </div>
          </div>
          <div className="bg-blue-100 text-center rounded-md py-2 mb-4">
            <p className="text-sm text-gray-600">Age Restriction</p>
            <p className="text-2xl font-bold text-blue-600">
              {visaDetails.age_restriction}
            </p>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-bold">Visa Details</h4>
            <p className="text-sm text-gray-600">{visaDetails.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center text-sm">
              <span className="font-bold text-lg mr-2">
                Contact Support :
              </span>
              <p>{visaDetails.application_method}</p>
            </div>
            <div className="flex items-center text-sm">
              <span className="font-bold text-lg mr-2">
                Attach Money :
              </span>
              <p>${visaDetails.fee}</p>
            </div>
            <div className="flex items-center text-sm">
              <span className="font-bold text-lg mr-2">Schedule :</span>
              <p>{visaDetails.processing_time}</p>
            </div>
            <div className="flex items-center text-sm">
              <span className="font-bold text-lg mr-2">Calendar Today :</span>
              <p>{visaDetails.validity}</p>
            </div>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-bold">Required Documents</h4>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {visaDetails.required_documents.map((doc, index) => (
                <li key={index}>{doc}</li>
              ))}
            </ul>
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white py-3 text-center font-semibold hover:bg-blue-700">
          Apply for the Visa
        </button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default VisaDetails;
