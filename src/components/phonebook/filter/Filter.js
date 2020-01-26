import React from 'react';

const Filter = ({ handleFilter, filter }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        onChange={handleFilter}
        value={filter}
      />
    </>
  );
};

export default Filter;
