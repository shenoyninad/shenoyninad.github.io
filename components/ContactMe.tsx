import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = { name: string; email: string; subject: string; message: string };

type Props = {};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:shenoyninad@gmail.com?subject=${formData.subject}&body=Hello, this is ${formData.name} (${formData.email}. ${formData.message} )`;
  };

  return (
    <div className='relative h-screen flex justify-evenly text-center md:text-left items-center flex-col md:flex-row mx-auto max-w-7xl px-10'>
      <h3 className='absolute text-gray-500 uppercase tracking-[15px] top-24 text-xl'>
        Contact
      </h3>
      <div className='flex flex-col space-y-10 mt-20'>
        <h4 className='font-semibold text-3xl text-center'>
          Let's work <span className='aboutKeywords'>together</span>!
        </h4>

        <div className='space-y-5'>
          <div className='flex items-center justify-center space-x-5'>
            <PhoneIcon className='h-7 w-7 text-[#F7AB0A] animate-pulse' />
            <p>+91 9686085774</p>
          </div>
          <div className='flex items-center justify-center space-x-5'>
            <EnvelopeIcon className='h-7 w-7 text-[#F7AB0A] animate-pulse' />
            <p>shenoyninad@gmail.com</p>
          </div>
          <div className='flex items-center justify-center space-x-5'>
            <MapPinIcon className='h-7 w-7 text-[#F7AB0A] animate-pulse' />
            <p>WFH ? Udupi : Bangalore;</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-3 w-fit mx-auto'
        >
          <div className='flex space-x-3'>
            <input
              {...register('name')}
              className='contactInput'
              type='text'
              placeholder='Name'
            />
            <input
              {...register('email')}
              className='contactInput'
              type='email'
              placeholder='Email'
            />
          </div>
          <input
            {...register('subject')}
            className='contactInput'
            type='text'
            placeholder='Subject'
          />
          <textarea
            {...register('message')}
            className='contactInput'
            placeholder='Message'
            name=''
            id=''
            cols={30}
            rows={10}
          ></textarea>
          <button
            type='submit'
            className='bg-[#F7AB0A] text-black font-bold rounded-sm px-10 py-3 cursor-pointer text-lg'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}