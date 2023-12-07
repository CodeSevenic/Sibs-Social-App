import React from 'react';

const Loading = () => {
  return (
    <div style={{ background: '#0008' }}>
      <svg width="205" height="250" viewBox="0 0 40 50">
        <polygon strokeWidth="1" stroke="#fff" fill="none" points="20,1 40,40 1,40"></polygon>
      </svg>
    </div>
  );
};

export default Loading;
