import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { img, title, price, _id } = service;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-[200px] w-full" />
      </figure>
      <div className="px-9 py-6 space-y-2">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="text-xl text-[#FF3811] font-bold">Price: ${price}</p>
          <Link to={`/details/${_id}`}>
            <p className="text-[#FF3811]">
              <FaArrowRight></FaArrowRight>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
