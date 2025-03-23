import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="About" text2="us" />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Welcome, your ultimate online shopping destination where quality
            meets convenience. We're here to bring you the best in fashion,
            electronics, home goods, and much more – all at your fingertips.
            Whether you're looking for the latest trends or timeless essentials,
            we have something for everyone.
          </p>
          <b className="text-gray-800">Our mission</b>
          <p> we believe in making your shopping experience as seamless and enjoyable as possible. Our mission is to offer a curated selection of high-quality products at competitive prices, with a focus on delivering exceptional customer service. We aim to make shopping easy, enjoyable, and accessible – no matter where you are</p>
        </div>
      </div>
    </div>
  );
};

export default About;
