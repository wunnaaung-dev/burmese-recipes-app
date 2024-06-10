import React from "react";
import Heading from "../typography/Heading";

const Footer = () => {
  return (
    <div className="bg-pink-300 absolute bottom-0 md:relative w-full flex flex-col justify-center items-center mt-2 py-2">
      <Heading level={4} className="text-center text-wrap">
        Contribution to <i>Ko Sann Lynn Htun&apos;</i> Burma Project
        Idea
      </Heading>

      <p>Developed By Wunna Aung</p>
      <small>
        Contact me from{" "}
        <a
          className=" underline text-blue-700 font-semibold"
          href="https://www.linkedin.com/in/wunna-aung-256116227/"
        >
          Linked In
        </a>
      </small>
    </div>
  );
};

export default Footer;
