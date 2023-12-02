import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import OrdersTable from "./OrdersTable";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  const url = `http://localhost:5007/orders?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [url]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Order</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <OrdersTable key={order._id} order={order}></OrdersTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
