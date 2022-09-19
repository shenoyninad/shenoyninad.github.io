import React from 'react';
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import heroDP from '../asset/portfolio-dp.jpeg';
import Link from 'next/link';

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      'Hello, This is Ninad Shenoy!',
      'Welcome to my portfolio!',
      '<ManWhoLovesToCode coffee={true} />',
      'ArsenalFan.tsx',
      'PartTimeBiker.cpp',
      'photographyEnthusiast.sh',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className='h-screen flex flex-col justify-center items-center text-center space-y-8 overflow-hidden'>
      <BackgroundCircles />
      <img
        src={heroDP.src}
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
      />
      <div className='z-20'>
        <h2 className='text-sm text-gray-500 pb-4 uppercase tracking-[12px]'>
          Software Engineer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-'>{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
