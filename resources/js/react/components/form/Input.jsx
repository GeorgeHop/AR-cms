import React from 'react';

const Input = ({type, placeholder, onChange, leftSideIconClass, isLoading}) => {
    const loading = isLoading ? 'is-loading' : '';

    return (
        <div className='field'>
            <div className={`control ${leftSideIconClass && 'has-icons-left'} ${loading}`}>
                <input className='input is-rounded' onChange={onChange} type={type} placeholder={placeholder}/>
                {leftSideIconClass && (
                    <span className="icon is-small is-left">
                        <i className={leftSideIconClass}/>
                    </span>
                )}
            </div>
        </div>
    );
}

export default Input;
