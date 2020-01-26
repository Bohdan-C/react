import React from 'react';

const Button = ({ onHandleLoad }) => (
  <button onClick={onHandleLoad} type="button" className="Button">
    Load More
  </button>
);

export default Button;
