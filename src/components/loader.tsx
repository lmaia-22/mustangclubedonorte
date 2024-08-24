import React from 'react';
import Ripple from '@/components/magicui/ripple';

// Define a simple Loader component
const Loader: React.FC = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center overflow-hidden bg-background text-center'>
      {/* Ripple effect that covers the entire screen */}
      <div className='absolute inset-0'>
        <Ripple />
      </div>
      {/* Centered image */}
      <img
        src='/logo_no_bk.png'
        className='relative z-10 h-20 w-28 lg:h-32 lg:w-40'
        alt='loader'
      />
    </div>
  );
};

export default Loader;
