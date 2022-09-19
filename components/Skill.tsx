import React from 'react';
import { motion } from 'framer-motion';
import tsLogo from '../asset/icons/typescript.png';

type Props = {
  directionLeft?: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={tsLogo.src}
        className='w-20 h-20 md:w-28 md:h-28 rounded-full border-gray-500 object-cover xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-200 ease-in-out'
      />
      <div className='absolute opacity-0 w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full group-hover:opacity-60 transition duration-200 ease-in-out group-hover:bg-white'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div>
    </div>
  );
}
