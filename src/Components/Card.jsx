import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Card = ({card}) => {
  // eslint-disable-next-line react/prop-types
  const {_id,country_image, visaType, processingTime, fee, validity, application_method} = card ; 
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200">
      <img
        className="w-full h-40 object-cover p-3"
        src={country_image}
        alt="Country"
      />
      <div className="px-6 py-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800">{visaType}</h3>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Processing Time:</span> {processingTime}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Fee:</span> ${fee}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Validity:</span> {validity}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-semibold">Application Method:</span> {application_method}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-center">
        <Link to={`/visaDetails/${_id}`}>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          See Details
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
