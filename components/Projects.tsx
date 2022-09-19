import React from 'react';
import projectIcon from '../asset/icons/script.png';
import { motion } from 'framer-motion';

type Props = {};

export default function Projects({}: Props) {
  const projects: number[] = [1, 2, 3, 4, 5];
  return (
    <div className='min-h-screen relative justify-evenly items-center text-left flex flex-col overflow-hidden md:flex-row max-w-full mx-auto z-0'>
      <h3 className='absolute text-gray-500 uppercase tracking-[15px] top-24 text-xl'>
        Projects
      </h3>

      <div className='scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 relative flex w-full snap-mandatory snap-x overflow-x-scroll overflow-y-hidden z-20'>
        {projects.map((project, index) => (
          <div className='flex-shrink-0 w-screen snap-center flex flex-col items-center p-20 md:p-44'>
            <motion.img
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src={projectIcon.src}
              className='w-20 h-20'
            />
            <div>
              <h4 className='text-2xl font-semibold text-center p-5'>
                Project {index + 1} of {projects.length}
              </h4>
              <p className='text-lg text-center md:text-left'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='absolute w-full top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </div>
  );
}
