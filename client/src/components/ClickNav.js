import React from 'react';

export default ({ orientation, text, onClick }) => (
  <div className={`click_nav click_nav--${orientation}`}>
    <button onClick={onClick}>{text}</button>
  </div>
);
