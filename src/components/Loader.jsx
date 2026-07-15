import React from 'react';

const Loader = ({ loaded }) => (
  <div className={`page-loader ${loaded ? 'hidden' : ''}`}>
    <div className="relative flex items-center justify-center">
      <div className="loader-ring" />
      <div className="loader-inner" />
    </div>
    <div className="text-center space-y-1">
      <p className="text-xs font-black tracking-[0.3em] uppercase" style={{ color: '#C9962C', fontFamily: 'Playfair Display, serif' }}>
        AL MOHRA
      </p>
      <p className="text-[9px] tracking-widest uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>
        Contracting Company
      </p>
    </div>
  </div>
);

export default Loader;
