import React from 'react';
import TopNavigation from '../shared/TopNavigation';
import Buttons from './Button';
import Description from './Description';
import PricingArea from './PricingArea';

const SingleRoomContainer = () => {
  return (
    <div className='flex justify-end'>
      <div className='flex flex-col md:flex-row md:w-11/12 gap-10 flex-wrap md:flex-nowrap'>
        <div className='w-full md:w-5/12 px-3 md:px-0  md:py-10 order-2 md:order-1 '>
          <div>
            <TopNavigation
              url={'/'}
              title={'Charming and comfortable house'}
              subTitle={'55 Emser Fields, Philadelphia Aug 2 - Aug 7, 2020'}
            />
            {/* content area start */}
            <div className='py-5'>
              <Description />
              <div className='my-7'>
                <hr />
              </div>
              <PricingArea />
              <div className='my-7'>
                <hr />
              </div>
              <Buttons />
            </div>
            {/* content area end */}
          </div>
        </div>
        <div className='w-full md:w-7/12 order-1 md:order-2 py-20 bg-red-100'>
          <div className=''> </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoomContainer;
