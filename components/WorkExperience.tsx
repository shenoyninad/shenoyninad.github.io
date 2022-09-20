import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import experienceJSON from '../data/experience.json';

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col h-screen relative justify-evenly items-center md:flex-row max-w-full px-10 mx-auto text-left'
    >
      <h3 className='absolute text-gray-500 uppercase tracking-[15px] top-24 lg:text-xl md:text-lg text-sm'>
        Experience
      </h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#F7AB0A]/80'>
        {experienceJSON.map((experience) => (
          <ExperienceCard {...experience} />
        ))}
      </div>

      <div className='absolute w-full top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </motion.div>
  );
}
