import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Card from "./Card";
import { useState } from "react";
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const AllVisa = () => {
  const data = useLoaderData() ;
  const [filterType, setFilterType] = useState("All");

  const filteredData =
    filterType === "All"
      ? data
      : data.filter((card) =>
          card?.visa_type?.toLowerCase() === filterType.toLowerCase()
        );

        const [text] = useTypewriter({
          words: ['Tourist Visa', 'Student Visa', 'Work Visa', 'Business Visa'],
          loop: 0,
          onLoopDone: () => console.log(`loop completed after 0 runs.`)
        })

  return (
    <div>
      <Navbar />
      <div className="bg-gray-50 py-12 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">We Have <span style={{fontWeight:'bold',color:"blue"}}>{text}</span><Cursor cursorColor='blue'/></h2>

        {/* Dropdown for Filtering */}
        <div className="flex justify-center mb-8">
          <select
            className="select select-bordered w-1/3"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Tourist Visa">Tourist Visa</option>
            <option value="Student Visa">Student Visa</option>
            <option value="Work Visa">Work Visa</option>
            <option value="Business Visa">Business Visa</option>
          </select>
        </div>


        <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5">
          {filteredData.length > 0 ? (
            filteredData.map((card) => <Card key={card.id} card={card} />)
          ) : (
            <p className="text-center text-gray-500">No visas available for the selected type.</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllVisa;
