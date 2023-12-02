import { Link } from "react-router-dom";
import checkOutImg from "../../../assets/images/checkout/checkout.png";
import logo from "../../../assets/logo.svg";
const DetailsPage = ({ foundService }) => {
  const { img, title, description, facility, price, _id } = foundService;

  return (
    <div className="max-w-7xl mx-auto my-12">
      <div className="relative">
        <img src={checkOutImg} className="w-full h-[200px]" alt="" />
        <div className="bg-gradient-to-r from-[#151515] absolute left-0 right-5 bottom-0 rounded-lg h-full">
          <h3 className="text-3xl text-left font-bold mt-[75px] ml-14 text-white">
            Service Details
          </h3>
        </div>
      </div>
      <div className="grid grid-cols-3  gap-3">
        <div className="col-span-2  space-y-4">
          <img src={img} className="w-full my-8 rounded-lg" alt="" />
          <h1 className="text-4xl font-semibold">Service: {title}</h1>
          <p>{description}</p>
          <div className="grid grid-cols-2 gap-3">
            {facility.map((item, indx) => (
              <div
                key={indx}
                className="card w-96 bg-base-300 shadow-xl border-orange-500 border-t-2 "
              >
                <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                  <p>{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="bg-[#151515] mt-8 rounded-lg h-fit text-center py-4 space-y-3">
            <div className="flex justify-center">
              <img src={logo} alt="" />
            </div>

            <h3 className="text-white">Need Help? We Are Here To Help You</h3>
            <div className="flex justify-center">
              <div className="bg-white w-1/3 rounded-lg px-4">
                <h3>Car Doctor Special</h3>
                <span>Save up to 60% off</span>
              </div>
            </div>
          </div>
          <h2 className="text-3xl font-bold my-5">Price: ${price}</h2>
          <Link to={`/checkOut/${_id}`}>
            <button className="bg-orange-600 w-full py-3 text-white font-semibold rounded-md">
              Proceed Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
