import React from 'react';

const Sidebar = () => {
    return (
        <aside className='custom-sidebar column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile'>
            <p className='menu-label'>Admin</p>
            <ul className='menu-list'>
                <li><a>Scenarios</a></li>
                <li><a>Users</a></li>
                <li><a>Users</a></li>
                <li><a>Users</a></li>
                <li><a>Users</a></li>
                <li><a>Users</a></li>
                <li><a>Users</a></li>
            </ul>
        </aside>
    );
}

export default Sidebar;
