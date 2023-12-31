import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] mt-12">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute flex p-24  transform -translate-y-1/2 left-0 right-5 top-1/2 bg-gradient-to-r from-[#151515] h-full rounded-lg">
          <div className="space-y-7">
            <h1 className="text-6xl font-bold text-white w-1/3">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-lg font-normal text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="bg-[#FF3811] px-4 py-3 rounded-lg text-white font-medium  mr-5">
                Discover More
              </button>
              <button className="px-4 py-3 border rounded-lg text-white font-medium">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end  transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute flex p-24  transform -translate-y-1/2 left-0 right-5 top-1/2 bg-gradient-to-r from-[#151515] h-full rounded-lg">
          <div className="space-y-7">
            <h1 className="text-6xl font-bold text-white w-1/3">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-lg font-normal text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="bg-[#FF3811] px-4 py-3 rounded-lg text-white font-medium  mr-5">
                Discover More
              </button>
              <button className="px-4 py-3 border rounded-lg text-white font-medium">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute flex p-24  transform -translate-y-1/2 left-0 right-5 top-1/2 bg-gradient-to-r from-[#151515] h-full rounded-lg">
          <div className="space-y-7">
            <h1 className="text-6xl font-bold text-white w-1/3">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-lg font-normal text-white w-1/3">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="bg-[#FF3811] px-4 py-3 rounded-lg text-white font-medium  mr-5">
                Discover More
              </button>
              <button className="px-4 py-3 border rounded-lg text-white font-medium">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute flex p-24  transform -translate-y-1/2 left-0 right-5 top-1/2 bg-gradient-to-r from-[#151515] h-full rounded-lg">
          <div className="space-y-7">
            <h1 className="text-6xl font-bold text-white w-1/3">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-lg font-normal text-white">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="bg-[#FF3811] px-4 py-3 rounded-lg text-white font-medium  mr-5">
                Discover More
              </button>
              <button className="px-4 py-3 border rounded-lg text-white font-medium">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-[#FF3811]">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
