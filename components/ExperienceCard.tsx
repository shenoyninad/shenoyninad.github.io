import React from 'react';
import { motion } from 'framer-motion';
import jsIcon from '../asset/icons/java-script.png';

type Props = {
  companyLogo: string;
  companyName: string;
  title: string;
  technologies: Array<string>;
  startDate: string;
  endDate: string;
  points: Array<string>;
};

export default function ExperienceCard({
  companyLogo,
  companyName,
  title,
  technologies,
  startDate,
  endDate,
  points,
}: Props) {
  return (
    <article className='flex lg:h-[600px] h-[600px] md:h-[600px] flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[450px] lg:w-[600px] snap-center backdrop-blur-sm hover:backdrop-blur-lg p-10 border border-[#292929] hover:opacity-100 cursor-pointer transition duration-200 overflow-x-scroll mt-20 hover:border-[#F7AB0A] z-20'>
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className='h-16 w-16 md:w-32 md:h-32 rounded-full object-cover object-center lg:h-[150px] lg:w-[150px]'
        src={companyLogo}
      />

      <div className='px-0 md:px-10 overflow-y-scroll scrollbar-thin overflow-x-scroll scrollbar-thumb-[#F7AB0A]/80'>
        <h4 className='lg:text-2xl md:text-xl font-light'>{title}</h4>
        <p className='font-bold mt-1 lg:text-xl md:text-base text-sm'>
          {companyName}
        </p>
        <div className='flex space-x-2 my-4'>
          {technologies.map((technology) => (
            <img
              className='md:h-8 md:w-8 h-6 w-6'
              src={technology}
            />
          ))}
        </div>
        <p className='uppercase text-gray-300 py-3 md:text-md text-sm'>
          {startDate} - {endDate}
        </p>

        <ul className='list-disc md:space-y-5 space-y-3 ml-5 md:text-md text-sm'>
          {points.map((point) => (
            <li>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
