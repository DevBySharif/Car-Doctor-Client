import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const Mainlayout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Mainlayout;
