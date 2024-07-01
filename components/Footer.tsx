import React from "react";
import { MagicButton } from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data/data";

const Footer = () => {
  return (
    <footer className="w-full pt-10 mb-[100px] md:mb-5 pb-10" id="contact">
      {/* <div className="w-full absolute left-0  ">
        <img src="/footer-grid.svg" alt="footer" />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className='text-purple'>your online presence</span> to the next level?
        </h1>
        <p className="md:mt-10 my-5 text-center text-white-200">
          Reach out to me today and let&apos;s discuss how I can help{" "}
          <span className="text-purple">you achieve your goals</span>
        </p>
        <a href="pkoinange02@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 peter</p>
        <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile) => (
                <div key={profile.id} className="w-10 h-10 flex justify-center cursor-pointer items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                    <img src={profile.img} alt='profile' height={20}  width={20}/>
                </div>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
