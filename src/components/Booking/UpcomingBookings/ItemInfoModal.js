import { Box, Modal } from '@mui/material';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useInnerSize } from '../../../hook/useInnerSize';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  borderRadius: 2,
  overflowY: 'auto',
  outline: 'none',
};
const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '95%',
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  borderRadius: 2,
  overflowY: 'auto',
  outline: 'none',
};

const ModalWrapper = ({ children, open, handleClose }) => {
  const { width } = useInnerSize();
  if (width > 767) {
    return (
      <>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>{children}</Box>
        </Modal>
      </>
    );
  }
  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style2}>{children}</Box>
      </Modal>
    </>
  );
};

const ItemInfoModal = (props) => {
  const {
    open,
    handleClose,
    dateFrom,
    dateTo,
    guestCount,
    payment,
    commentForOwner,
    image,
    title,
    subTitle,
  } = props;
  return (
    <div>
      <ModalWrapper open={open} handleClose={handleClose}>
        <div className='pb-10 pt-4'>
          <div className='py-2  px-5 pb-6 border-b-2 relative text-black flex justify-between items-center'>
            <div></div>
            <h2 className='text-center font-normal'>Booking Details</h2>

            <FaTimes
              className='text-xl text-gray-900  cursor-pointer'
              onClick={handleClose}
            />
          </div>

          <div className='mt-6 px-8'>
            <div className='flex border rounded-md gap-x-4 overflow-hidden'>
              <div className='w-60 h-28 '>
                <img
                  src={image}
                  alt=''
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='py-3'>
                <h2 className='font-medium  text-black text-xl mb-3'>
                  {title}
                </h2>

                <p className='text-sm text-primary-black'>{subTitle}</p>
              </div>
            </div>

            <div className='mt-5 pb-4 border-b-2'>
              <p className='font-normal mb-1'>Dates</p>
              <p className='font-bold text-lg'>
                {dateFrom}-{dateTo}
              </p>
            </div>
            <div className='mt-5 pb-4 border-b-2'>
              <p className='font-normal mb-1'>Guests</p>
              <p className='font-bold text-lg'>{guestCount} Guests</p>
            </div>
            <div className='mt-5 pb-4 border-b-2'>
              <p className='font-normal mb-1'>Payment</p>
              <p className='font-bold text-lg'>{payment}</p>
            </div>
            <div className='mt-5 pb-4 border-b-2'>
              <p className='font-normal mb-1'>Comment for the owner</p>
              <p className='font-bold text-lg'>{commentForOwner}</p>
            </div>
            <button className='w-full bg-green-500 py-3 text-center rounded-md text-white font-bold'>
              Send Messages
            </button>
          </div>
        </div>
      </ModalWrapper>
    </div>
  );
};

export default ItemInfoModal;
