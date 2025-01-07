import { useLoaderData } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Card from "./Card";


const AllVisa = () => {
  const data = useLoaderData();
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-gray-50 py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Visa Information</h2>
      <div className='container mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5'>
          {
            data.map(card=><Card key={card.id} card={card}></Card>)
          }
      </div>
    </div>
      <Footer></Footer>
    </div>
  );
};

export default AllVisa;