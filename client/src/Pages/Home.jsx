import React from "react";
import homeCat from '.././assets/images/home-cat2.webp'
import homeFish from '.././assets/images/fish.jpg'
import homeDog from '.././assets/images/home-dog.jpg'
import Subtitle from "../components/Subtitle-home/Subtitle";
import ServiceList from "../components/Service/ServiceList";
import ReviewCard from "../components/Reviews/ReviewCard";
import CustomGallary from "../components/Gallary/CustomGallary";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import DropDown from "../components/DropDown/DropDown";
const Home = () => {
  // const { user } = useSelector((state) => state.user)
  // console.log(user);

  return (
    <div className=" mx-auto w-[90%] md:w-full sm:w-full sm:p-2 md:p-2 sticky sm:text-xs">
      <div className="w-[90%] md:w-full sm:w-full mx-auto">

        <div className="w-full grid grid-cols-2 gap-x-4 sm:grid-cols-1 sm:gap-y-2 sm:gap-x-2">
          <div className="my-auto">
            <Subtitle />
          </div>
          {/* THREE IMAGES IN HOME */}
          <div className="w-full sm:mt-0 mt-10">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 400: 3, 760: 3, 900: 3 }}
            >
              <Masonry gutter='1rem'>
                <img className=' duration-700 ease-out w-[100%] h-auto block rounded-lg ' src={homeCat} alt="noimage" />
                <img className=' duration-700 ease-out w-[100%] h-auto block rounded-lg mt-8 ' src={homeFish} alt="noimage" />
                <img className=' duration-700 ease-out w-[100%] h-auto block rounded-lg ' src={homeDog} alt="noimage" />
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>

        <div className="grid grid-cols-12  mt-[50px] mb-[50px] md:block sm:block ">
          <div className="col-span-5  mt-4">
            <h1 className="w-[300px] font-fancy text-[30px] pb-2 sm:text-[20px] text-[#af2f2f]">What we Serve</h1>
            <p className="w-[300px] font-primary font-semibold text-3xl sm:text-sm  ">We offer Our Best <span className="text-button-primary">Services</span></p>

          </div>
          <div className="col-span-7 mx-auto my-auto ">
            <ServiceList />
          </div>
        </div >
        {/* =================Searchbar============= */}
        {/* ===============SErvices================ */}
        {/* ===============SErvices================ */}

        {/* ===============PET-LIST================== */}
        <div className="">
          <h1 className="font-semibold font-primary text-3xl sm:text-sm ">Here comes your<br /> <span className="text-button-primary">future friends</span></h1>
        </div>
        {/* DROP DOWN AND PET LISTS */}
        <div className="mt-4">
          <h1 className="bg-button-primary w-[100px] text-center py-2 rounded-3xl font-fancy text-2xl">Explore</h1>

          <div className="w-full">
            <DropDown />
          </div>

        </div>
        {/* ===============PET-LIST================== */}
        {/* ===============GALLARY================== */}
        <div className="customersGallery mt-[50px]">
          <div className="description">
            <h1 className="font-primary text-3xl sm:text-sm  font-semibold">
              View Our <span className="text-button-primary">Gallery</span>
            </h1>
          </div>
          <div className="gallery ">
            <div className="mx-auto">
              <CustomGallary />
            </div>
          </div>
        </div>
        {/* ===============GALLARY================== */}
        {/* ===============REVEIWS================== */}
        <div className=" mx-auto text-3xl sm:text-sm  font-primary font-semibold">
          <h1>See What Our <br /> <span className="text-button-primary">Customers</span> Talks <br /> About Us </h1>
        </div>
        <div className="">
          <div className="reviewCard sm:block">
            <ReviewCard />
          </div>
        </div>
        {/* ===============REVEIWS================== */}

      </div>
      <div className="w-full">
        <NewsLetter />
      </div>
    </div>
  );
};

export default Home;
