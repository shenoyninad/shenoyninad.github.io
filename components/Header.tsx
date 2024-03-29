import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {};

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center px-3'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.75,
        }}
        className='flex flex-row items-center'
      >
        {/* Social icons */}
        <SocialIcon
          url='https://github.com/shenoyninad/'
          fgColor='grey'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.linkedin.com/in/ninad-shenoy-0a931610b'
          fgColor='grey'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.instagram.com/ninadshenoy/'
          fgColor='grey'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.facebook.com/brainy.ninad/'
          fgColor='grey'
          bgColor='transparent'
        />
      </motion.div>

      <Link href='#contact'>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.75,
          }}
          className='flex flex-row items-center cursor-pointer text-gray-300'
        >
          <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
          />
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
            Get in touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
