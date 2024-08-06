import React from 'react';
import StarRateIcon from '@mui/icons-material/StarRate';

export default function CustomerFeedBack() {
  return (
    <div className='mytable my-4 p-3 px-4 rounded'>
      <h2 className='fw-bold fs-4 text-white'>Customer's Feedback</h2>
      <div className='border-bottom py-3'>
        <div className="d-flex align-items-center">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" 
            width="35px" 
            alt="User Avatar" 
          />
          <p className='ms-3 fw-bold text-white'>Jenny Wilson</p>
        </div>
        <div className="d-flex py-2">
          <StarRateIcon className='text-warning' />
          <StarRateIcon className='text-warning' />
          <StarRateIcon className='text-warning' />
          <StarRateIcon className='text-warning' />
          <StarRateIcon className='text-muted' />
        </div>
        <p className='text-light small'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae asperiores fugiat dicta voluptatibus labore, a cumque animi accusantium culpa suscipit?
        </p>
      </div>
      <div className='border-bottom py-3'>
        <div className="d-flex align-items-center">
          <img 
            src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" 
            width="35px" 
            alt="User Avatar" 
          />
          <p className='ms-3 fw-bold text-white'>Dianne Rusell</p>
        </div>
        <div className="d-flex py-2">
          <StarRateIcon className='text-warning' />
          <StarRateIcon className='text-warning' />
          <StarRateIcon className='text-warning' />
          <StarRateIcon className='text-warning' />
          <StarRateIcon className='text-warning' />
        </div>
        <p className='text-light small'>
          Lorem ipsum labore, a cumque animi accusantium culpa suscipit?
        </p>
      </div>
    
    </div>
  );
}
