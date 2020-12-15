import React from 'react';
import PaginationTable from "../../components/pagination/PaginationTable";
import PageHeader from "../../components/MainLayout/PageHeader";
import {NavLink} from "react-router-dom";

const UsersList = () => {
    const renderUsersList = users => (
        <>
            <thead>
            <tr>
                <th>id</th>
                <th>Username</th>
                <th>User role</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user, index) => (
                <tr key={index}>
                    <th scope="row">{user.id}</th>
                    <td>{user.username}</td>
                    <td>
                        <select className="form-control" id="admin-role">
                            <option value={'Admin'}>Admin</option>
                            <option value={'Scenarist'}>Scenarist</option>
                            <option value={'Support'}>Support</option>
                        </select>
                    </td>
                    <td>
                        <NavLink type="button" to={'/'}
                                 className="btn btn-info btn-sm m-1">Edit
                        </NavLink>
                        <button type="button" onClick={() => {
                        }}
                                className="btn btn-danger btn-sm m-1">Delete
                        </button>
                    </td>
                </tr>
            ))}
            </tbody>
        </>
    );

    return (
        <>
            <PageHeader
                title={'Users List'}
            />
            <PaginationTable
                url={'/users'}
                render={(users) => renderUsersList(users)}
            />
        </>
    )
}

export default UsersList;
