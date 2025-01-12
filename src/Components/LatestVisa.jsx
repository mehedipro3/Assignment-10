import { Link, useLoaderData } from "react-router-dom";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";


const LatestVisa = () => {
  const visa = useLoaderData();
  return (
    <div className="bg-gray-50 py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">
        <Fade animate__pulse>
          Visa Information
        </Fade>
      </h2>
      <div className='container mx-auto  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-5'>
        {
          visa.map(card => <Card key={card.id} card={card}></Card>)
        }
      </div>
      <div className="font-bold text-center">
        <Link to={'/allVisa'}>
          <button className="btn bg-blue-500 text-white">See All Visas</button>
        </Link>
      </div>
    </div>
  );
};

export default LatestVisa;
