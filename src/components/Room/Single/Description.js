import React from 'react';

const Description = () => {
  return (
    <div className='description'>
      <div className='rounded-md overflow-hidden w-full h-4/5 mb-4'>
        <img
          src='https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg'
          alt=''
          className='w-full h-full object-cover'
        />
      </div>

      <div className='pb-5 mt-7 mb-3'>
        <h2 className='text-xl font-medium mb-2'>
          How to find apartments and house rules
        </h2>
        <div className='text-base text-gray-800'>
          <p>
            It should be fresh and original - without visual cliches or amateur
            effects. A logo is well-designed when it looks as good on a business
            card as it does on a web page or a billboard. To be functional, a
            good logo must reduce well to simple black {'&'} white or grayscale
            for use faxes or in newspaper ads. The best logos are elegantly simp
          </p>
          <p className='mt-2'>
            In a way, a logo is a visual shortcut to who you are. Your log
            establish your corporate identity and credibility. It builds loy
            among your clients and employees. You invest in your brand every
            time your logo is displayed on a Web page, on a sign
          </p>
        </div>
      </div>
    </div>
  );
};

export default Description;
