import React from 'react';
import projectIcon from '../asset/icons/script.png';
import projectsJSON from '../data/projects.json';
import { motion } from 'framer-motion';

type Props = {};

export default function Projects({}: Props) {
  return (
    <div className='min-h-screen relative justify-evenly items-center text-left flex flex-col overflow-hidden md:flex-row max-w-full mx-auto z-0'>
      <h3 className='absolute text-gray-500 uppercase tracking-[15px] lg:top-24 mg:top-20 top-16 lg:text-xl md:text-lg text-sm'>
        Projects
      </h3>

      <div className='scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 relative flex w-full snap-mandatory snap-x overflow-x-scroll overflow-y-hidden z-20'>
        {projectsJSON.map((project, index) => (
          <div className='flex-shrink-0 w-screen snap-center flex flex-col items-center p-20 md:p-44'>
            <motion.img
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              src={project.projectLogo}
              className='w-20 h-20'
            />
            <div>
              <h4 className='text-2xl font-semibold text-center p-5'>
                Project {index + 1} of {projectsJSON.length}:{' '}
                {project.projectName}
              </h4>
              <p className='text-lg text-center md:text-left'>
                {project.description}
              </p>
            </div>
            <div className='flex md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-3 mt-8'>
              {project.buildAvailable ? (
                <a
                  href={project.buildURL}
                  target='_blank'
                  className='bg-[#F7AB0A] text-black font-bold rounded-sm px-10 py-3 cursor-pointer text-md'
                >
                  Take me to the build
                </a>
              ) : (
                <div />
              )}
              <a
                href={project.githubURL}
                target='_blank'
                className='bg-[#F7AB0A] text-black font-bold rounded-sm px-10 py-3 cursor-pointer text-md'
              >
                Take me to the repo
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className='absolute w-full top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'></div>
    </div>
  );
}
