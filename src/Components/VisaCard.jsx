const VisaCard = ({ application }) => {
  const {
    country,
    visa_type,
    processing_time,
    fee,
    validity,
    application_method,
    applied_date,
    applicant_name,
    email,
  } = application;

  return (
    <div className="card bg-white shadow-md rounded-lg p-4">
      <h3 className="text-xl font-bold">{country}</h3>
      <p className="text-sm text-gray-600">{visa_type}</p>
      <div className="mt-2">
        <p>Processing Time: {processing_time}</p>
        <p>Fee: {fee}</p>
        <p>Validity: {validity}</p>
        <p>Application Method: {application_method}</p>
        <p>Applied Date: {applied_date}</p>
        <p>Applicant Name: {applicant_name}</p>
        <p>Applicant Email: {email}</p>
      </div>
      <button className="btn btn-error mt-4 w-full">Cancel Application</button>
    </div>
  );
};

export default VisaCard;
