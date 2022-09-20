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
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[450px] xl:w-[600px] snap-center bg-[#292929] p-10 opacity-40 border border-[#292929] hover:opacity-100 cursor-pointer transition duration-200 overflow-hidden mt-20 hover:border-[#F7AB0A]'>
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]'
        src={companyLogo}
      />

      <div className='px-0 md:px-10 overflow-y-scroll'>
        <h4 className='text-2xl font-light'>{title}</h4>
        <p className='font-bold mt-1 text-xl'>{companyName}</p>
        <div className='flex space-x-2 my-4'>
          {technologies.map((technology) => (
            <img
              className='h-8 w-8'
              src={technology}
            />
          ))}
        </div>
        <p className='uppercase text-gray-300 py-3'>
          {startDate} - {endDate}
        </p>

        <ul className='list-disc space-y-5 ml-5 text-md'>
          {points.map((point) => (
            <li>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
