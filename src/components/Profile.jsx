import React from 'react';
import rohan from './rohan.png'

export default function Profile() {
  return (
    <div>
      <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src={rohan}
          alt="Profile" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Software Engineer</div>
          <h1 className="block mt-1 text-lg leading-tight font-medium text-black">Rohan Sharma</h1>
          <p className="mt-2 text-gray-500">Mumbai</p>
          <p className="mt-2 text-gray-500">React Developer</p>
          
        </div>
      </div>
      
    </div>
    <div className='h-[200px]'></div>
    </div>
  );
}
