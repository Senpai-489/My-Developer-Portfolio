import React from 'react';
import Lottie from 'lottie-react';
import * as animationData from '@/app/assets/blob.json';
import me from '@/app/assets/me.png'
import Image from 'next/image';

const LottieControl = () => {
  return (
    <div >
      <Lottie 
        animationData={animationData} 
        className="absolute top-72 right-28 md:right-64 md:top-20" 
      >
      </Lottie>
      <Image src={me} alt='me' className='absolute md:h-72 md:w-72 lg:h-72 lg:w-72 h-44 w-44 top-[43vh] right-40 md:right-96 md:top-44'/>
    
       </div>
  );
};

export default LottieControl;
