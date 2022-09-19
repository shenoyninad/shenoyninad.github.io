import React from 'react';
import Skill from './Skill';

type Props = {};

export default function Skills({}: Props) {
  return (
    <div className='min-h-screen relative justify-center flex flex-col items-center text-center md:text-left xl:flex-row mx-w-[2000px] xl:px-10 mx-auto xl:space-y-0'>
      <h3 className='absolute text-gray-500 uppercase tracking-[15px] top-24 text-xl'>
        Skills
      </h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
        Hover on a skill for my current proficiency
      </h3>

      <div className='grid grid-cols-4 gap-5'>
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  );
}
