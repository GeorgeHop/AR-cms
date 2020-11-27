import React from 'react';

const Button = ({onClick, buttonText}) => (
    <button className='button is-link is-normal is-fullwidth' onClick={onClick}>{buttonText || ''}</button>);

export default Button;
