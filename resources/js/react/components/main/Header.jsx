import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return(
        <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <NavLink className='navbar-item' to={'/'}>AR cms</NavLink>
            </div>

            <div className='navbar-menu'>
                <div className='navbar-end'>
                    <div className='navbar-item'>
                        <div className='buttons'>
                            <button className='button is-light'>Log out</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
