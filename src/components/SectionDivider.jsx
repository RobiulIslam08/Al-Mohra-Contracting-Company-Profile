import React from 'react';

const SectionDivider = ({ variant = 'angle', bgColor = '#FAF7F2' }) => {
  return (
    <div className="w-full relative z-10 leading-none block overflow-hidden" style={{ marginTop: '-1px' }}>
      {variant === 'wave' ? (
        <svg 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none" 
          style={{ width: '100%', height: '80px', display: 'block' }}
        >
          <path 
            d="M0,64 C360,120 1080,0 1440,64 L1440,120 L0,120 Z" 
            fill={bgColor} 
          />
        </svg>
      ) : (
        <svg 
          viewBox="0 0 1440 100" 
          preserveAspectRatio="none" 
          style={{ width: '100%', height: '60px', display: 'block' }}
        >
          <polygon 
            points="0,100 1440,0 1440,100" 
            fill={bgColor} 
          />
        </svg>
      )}
    </div>
  );
};

export default SectionDivider;
