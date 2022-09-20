import React from 'react';
import { motion } from 'framer-motion';
import tsLogo from '../asset/icons/typescript.png';

type Props = {
  language: string;
  score: string;
  languageIcon: string;
  isLeftDirection: boolean;
};

export default function Skill({
  language,
  score,
  languageIcon,
  isLeftDirection,
}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{ x: isLeftDirection ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        src={languageIcon}
        className='w-12 h-12 md:w-16 md:h-16 rounded-sm border-gray-500 object-fill xl:w-20 xl:h-20 filter group-hover:grayscale transition duration-200 ease-in-out'
      />
      <div className='absolute opacity-0 w-12 h-12 md:w-16 md:h-16 xl:w-20 xl:h-20 rounded-sm group-hover:opacity-60 transition duration-200 ease-in-out group-hover:bg-white'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-xl md:text-2xl xl:text-3xl font-bold text-black opacity-100'>
            {score}
          </p>
        </div>
      </div>
    </div>
  );
}
