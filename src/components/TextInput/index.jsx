import './styles.css';
import React
 from 'react';
 import P from 'prop-types';

export const TextInput  = ({ searchValue, handleChange }) => {
   return (
     <input className="text-input"
     placeholder='Type your search'
     type="search"
    onChange={handleChange}
    value={searchValue} />
   )
}

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired
}
