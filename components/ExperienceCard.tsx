import React from 'react';
import { motion } from 'framer-motion';
import jsIcon from '../asset/icons/java-script.png';

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[700px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden mt-20'>
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full object-cover object-center xl:h-[200px] xl:w-[200px]'
        src={
          'https://firebasestorage.googleapis.com/v0/b/ninadgram-sandbox.appspot.com/o/WhatsApp%20Image%202022-04-06%20at%2010.17.18%20PM.jpeg?alt=media&token=8197b6e1-fc62-40ea-984f-944d70534a60'
        }
      />

      <div className='px-0 md:px-10 overflow-y-scroll'>
        <h4 className='text-4xl font-light'>Full Stack Intern</h4>
        <p className='font-bold mt-1 text-2xl'>Medici Technologies</p>
        <div className=' flex space-x-2 my-2'>
          <img
            className='h-8 w-8'
            src={jsIcon.src}
          />
          <img
            className='h-8 w-8'
            src={jsIcon.src}
          />
          <img
            className='h-8 w-8'
            src={jsIcon.src}
          />
        </div>
        <p className='uppercase text-gray-300 py-5'>May - August 2017</p>

        <ul className='list-disc space-y-5 ml-5 text-md'>
          <li>
            Summary pointsSummary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary pointsSummary
          </li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
