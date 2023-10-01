import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  const navigation = [
    { navi: "Home", to: "/" },
    { navi: "Work", to: "/work" },
    { navi: "Contact", to: "/contact" },
  ];
  const socials = [
    { soc: "ri-facebook-circle-fill", src: "https://www.instagram.com" },
    { soc: "ri-twitter-fill", src: "https://www.instagram.com" },
  ];
  return (
    <div className="grid grid-cols-12 justify-center items-center min-h-screen">
      <nav className="sticky top-0 left-0 grid col-span-12 justify-between items-center bg-[#333] px-2 z-1000">
        <div className="grid grid-cols-4 col-start-3 px-2 ">
          <div className="flex justify-center items-center px-4 py-2 border-r-[1px] border-[#47433D] hover:bg-[#000]">
            <img
              src="https://i.ibb.co/S6dS0Gw/relief-connect-logo-removebg-preview.png"
              className="w-[90px]"
            />
          </div>
          {navigation.map((element) => (
            <div className="flex justify-center items-center px-8 border-r-[1px] border-[#47433D] hover:bg-[#000]">
              <Link
                to={element.to}
                className="text-white text-base uppercase font-[300]"
              >
                {element.navi}
              </Link>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 col-start-10 col-span-3">
          {socials.map((element) => (
            <div className="flex justify-center items-center px-2 border-[#47433D] hover:bg-[#000] hover:rounded-3xl">
              <Link to={element.src} className="text-white text-xl uppercase">
                <i class={element.soc}></i>
              </Link>
            </div>
          ))}
        </div>
      </nav>
      <div className="grid grid-cols-12 relative overflow-visible col-span-12 justify-center items-center mb-8">
        <img
          // src="https://plus.unsplash.com/premium_photo-1663076063751-80c3da778a8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lsZGZpcmUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          // src="https://images.unsplash.com/photo-1602980068989-cb21869ab2c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2lsZGZpcmUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
          src="https://plus.unsplash.com/premium_photo-1661962514590-7cfa4f3d446d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvb2RzJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
          className="col-span-12 inset-0 h-[100vh] w-full object-fill object-right z-0 md:object-center"
        />
        <div className="bg-black opacity-40 absolute inset-0 z-10"></div>
        <div className="flex flex-col col-span-6 col-start-2 absolute mx-auto max-w-7xl z-20">
          <span
            className="text-7xl text-gray-300 uppercase"
            style={{
              fontFamily: "'Paytone One', sans-serif",
              textShadow: "5px 5px 5px rgba(0, 0, 0, 1)",
            }}
          >
            Relief Connect
          </span>
          <span className="text-xl mt-4 text-gray-400">
            This is a disaster relief and rescue aid. It aims to reduce the
            issue of fragmented response by various organizations during the
            times of natural calamity.
          </span>
          <div className="px-2 py-2 my-4 border-4 border-white bg-transparent w-32  text-white text-center hover:bg-white hover:border-gray-300 hover:shadow-md hover:shadow-gray-500 hover:text-inherit">
            <Link to="/signup" className="italic uppercase">
              Get started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
