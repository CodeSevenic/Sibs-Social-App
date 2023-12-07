import React from 'react';

const Toast = () => {
  return (
    <div className="toast show position-fixed">
      <div className="toast-header">
        <strong>Toast Title</strong>
        <button>&times</button>
      </div>
      <div className="toast-body">Toast body</div>
    </div>
  );
};

export default Toast;
