import React from 'react';
import { motion } from 'framer-motion';
import aboutPicture from '../asset/portfolio-dp-color.jpeg';

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly items-center mx-auto relative'
    >
      <h3 className='uppercase text-gray-500 tracking-[15px] absolute top-24 text-xl'>
        About
      </h3>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={aboutPicture.src}
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96'
      />

      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='font-semibold text-4xl'>
          Here is something <span className='aboutKeywords'>about</span> me!
        </h4>
        <p className='text-sm'>
          I'm Ninad Shenoy, I come from{' '}
          <span className='aboutKeywords'>Udupi</span>, a small coastal town in
          Karnataka, India. I've been a{' '}
          <span className='aboutKeywords'>software engineer</span> for almost 4
          years now. I've always loved working on UI technologies right from
          when I was in college. In my spare time I like building fun projects,
          watching sports, especially{' '}
          <span className='aboutKeywords'>football, cricket and F1</span>, going
          on long <span className='aboutKeywords'>motorcycle</span> rides and
          also trying my hand in{' '}
          <span className='aboutKeywords'>photography!</span>
        </p>
      </div>
    </motion.div>
  );
}
