import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import WorkExperience from '../components/WorkExperience';
import heroDP from '../asset/portfolio-dp.jpeg';

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(3,43,43)] text-white h-screen overflow-y-scroll overflow-x-hidden snap-y snap-mandatory z-0 scrollbar scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Ninad's portfolio</title>
      </Head>
      <Header />

      <section
        id='hero'
        className='snap-start'
      >
        <Hero />
      </section>

      <section
        id='about'
        className='snap-center'
      >
        <About />
      </section>

      <section
        id='experience'
        className='snap-center'
      >
        <WorkExperience />
      </section>

      <section
        id='skills'
        className='snap-start'
      >
        <Skills />
      </section>

      <section
        id='projects'
        className='snap-start'
      >
        <Projects />
      </section>

      <section
        id='contact'
        className='snap-start'
      >
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 cursor-pointer w-full mt-10'>
          <div className='flex items-center justify-center'>
            <img
              src={heroDP.src}
              className='h-10 w-10 cursor-pointer rounded-full filter grayscale hover:grayscale-0'
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};

export default Home;
