import { useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import VisaCard from "./VisaCard";

const VisaApplication = () => {
  const applications = [
    {
      id: 1,
      country: "Germany",
      visa_type: "Student Visa",
      processing_time: "10 days",
      fee: "$15000",
      validity: "2025-02-20",
      application_method: "Double Entry",
      applied_date: "2025-01-06",
      applicant_name: "Mehedi Ratul",
      email: "mehediratul10191030@gmail.com",
    },
    {
      id: 2,
      country: "USA",
      visa_type: "Tourist Visa",
      processing_time: "5 days",
      fee: "$999",
      validity: "2025-04-30",
      application_method: "Double Entry",
      applied_date: "2025-01-08",
      applicant_name: "Shishir Mondal",
      email: "mehediratul10191030@gmail.com",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredApplications = applications.filter((app) =>
    app.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Visa Applications</h2>

        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search by country name..."
            className="input input-bordered w-1/3"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn bg-blue-400 text-white ml-2">Search</button>
        </div>

        {/* Visa Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredApplications.length > 0 ? (
            filteredApplications.map((app) => (
              <VisaCard key={app.id} application={app} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No visa applications found.
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VisaApplication;
