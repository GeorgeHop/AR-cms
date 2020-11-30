import React from 'react';
import {NavLink} from "react-router-dom";
import {DefaultUserImage} from "../../helpers/constants";

const Sidebar = ({userImage}) => {
    return (
        <aside className='custom-sidebar column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile has-background-primary'>
            <div className='custom-menu-user-container navbar-brand'>
                <figure className='image is-64x64'>
                    <img className="is-rounded" alt='' src={userImage || DefaultUserImage}/>
                </figure>
                <NavLink className='navbar-item' to={'/'}>User Name</NavLink>
            </div>
            <p className='menu-label custom-menu-label'>Admin</p>
            <ul className='menu-list'>
                <li><a className='custom-menu-list-item'>Admins</a></li>
                <li><a className='custom-menu-list-item'>Users</a></li>
                <li><a className='custom-menu-list-item'>Subscribed users</a></li>
            </ul>
            <p className='menu-label custom-menu-label'>Scenarist</p>
            <ul className='menu-list'>
                <li><a className='custom-menu-list-item'>Scenarios Constructor</a></li>
                <li><a className='custom-menu-list-item'>List of Scenarios</a></li>
            </ul>
            <p className='menu-label custom-menu-label'>Support</p>
            <ul className='menu-list'>
                <li><a className='custom-menu-list-item'>Issues</a></li>
                <li><a className='custom-menu-list-item'>Messages</a></li>
            </ul>
        </aside>
    );
}

export default Sidebar;
