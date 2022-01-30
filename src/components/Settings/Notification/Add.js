import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const Add = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <div className='mt-7'>
      <div
        className='flex items-center gap-x-3 text-gray-700 cursor-pointer'
        onClick={() => setShowForm((prev) => !prev)}
      >
        <FaPlusCircle className='text-lg' />
        <p className='font-medium'>Add More</p>
      </div>
      {showForm && (
        <form>
          <h2>Form here</h2>
        </form>
      )}
    </div>
  );
};

export default Add;
