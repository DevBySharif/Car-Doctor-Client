import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Contact></Contact>
      <Products></Products>
    </div>
  );
};

export default Home;
