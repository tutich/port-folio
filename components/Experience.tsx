import { workExperience } from "@/data/data";
import React from "react";
import { Button } from "./ui/MovingBorder";

const Experience = () => {
  return (
    <div className="py-20" id="">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 w-full mt-12">
        {workExperience.map((work, id) => (
            <Button 
            key={id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            >
                <div className="flex flex-col lg:flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                    <img src={work.thumbnail} alt="work" className='lg:w-32 md:w-20 w-16' />
                    <div className="lg:ms-5">
                      <h1 className="text-start text-xl md:text-2xl font-bold ">{work.title}</h1>
                      <p className="mt-4 text-white-100 font-semibold text-start">{work.desc}</p>
                    </div>
                </div>
            </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
