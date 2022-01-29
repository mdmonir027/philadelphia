import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className='my-10'>
      <div className='custom-container'>
        <div className=' md:flex justify-center'>
          <div className='w-full  lg:w-10/12 xl:w-9/12 2xl:w-8/12 md:flex justify-between items-center'>
            <div>
              <h2 className='text-primary-black text-xl font-medium '>
                Not finding what you need?
              </h2>
              <p className='text-primary-black text-sm mt-1'>
                Find category-specific content in these other sections of the
                help Center
              </p>
            </div>
            <Link
              to={'/'}
              className='bg-primary px-10 py-3 rounded-md text-base text-white inline-block mt-5 md:mt-0 w-full md:w-auto'
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
