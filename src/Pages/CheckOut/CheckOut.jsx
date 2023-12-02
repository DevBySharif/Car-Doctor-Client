import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import checkOutImg from "../../assets/images/checkout/checkout.png";
const CheckOut = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5007/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(true);
      });
  }, []);

  const foundService = loading
    ? services.find((service) => service._id === id)
    : "No data found";

  const { title, _id, price, img } = foundService;

  const { user } = useContext(AuthContext);
  const handleCheckout = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const number = form.number.value;
    const email = form.email.value;
    const feedback = form.feedback.value;
    console.log(name, date, number, email, feedback);
    const order = {
      customerName: name,
      service: title,
      service_id: _id,
      img,
      price,
      date,
      number,
      email,
      feedback,
    };
    console.log(order);

    fetch("http://localhost:5007/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Order Place Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="max-w-7xl mx-auto my-12">
      <div className="relative">
        <img src={checkOutImg} className="w-full h-[200px]" alt="" />
        <div className="bg-gradient-to-r from-[#151515] absolute left-0 right-5 bottom-0 rounded-lg h-full">
          <h3 className="text-3xl text-left font-bold mt-[75px] ml-14 text-white">
            Check Out
          </h3>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
            <form onSubmit={handleCheckout} className="card-body">
              <div className="flex gap-3">
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Name"
                    defaultValue={user?.displayName}
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="date"
                    name="date"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="form-control">
                  <input
                    type="number"
                    name="number"
                    placeholder="Your Phone"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    placeholder="Your Email"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  className="textarea textarea-bordered textarea-lg w-full"
                  name="feedback"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="bg-[#FF3811] text-white py-2 rounded-lg">
                  Order Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
