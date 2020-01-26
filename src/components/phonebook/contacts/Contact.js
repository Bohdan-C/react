import React from 'react';

import shortid from 'shortid';

const Contact = ({ handleDelete, name, number }) => {
  return (
    <li id={shortid()}>
      {name}: {number}
      <button
        onClick={() => {
          handleDelete(shortid());
        }}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
