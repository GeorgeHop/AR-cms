import React from 'react';
import PageHeader from "../../components/MainLayout/PageHeader";
import {Routes} from "../../helpers/constants";
import {NavLink} from "react-router-dom";
import API from "../../helpers/API";
import PaginationTable from "../../components/pagination/PaginationTable";

const AdminsList = () => {
    const deleteUser = (id, name) => {
        let result = confirm(`Are you sure do you want to delete ${name} ?`);

        if (!result)
            return;

        API.delete('/admins/' + id)
            .then(res => console.log(res)).catch(console.log);
    }

    const renderAdminsList = (admins) => (
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
            {admins.map((user, index) => (
                <tr key={index}>
                    <th scope="row">{user.id}</th>
                    <td>{user.username}</td>
                    <td>[user role here]</td>
                    <td>
                        <NavLink type="button" to={Routes.AdminsEdit(user.id)}
                                 className="btn btn-info btn-sm m-1">Edit
                        </NavLink>
                        <button type="button" onClick={() => deleteUser(user.id, user.username)}
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
                title={'Admins List'}
                buttonLabel={'Add New Admin'}
                buttonRoute={Routes.AdminsCreate}
            />
            <PaginationTable
                url={'/admins'}
                render={(admins) => renderAdminsList(admins)}
            />
        </>
    );
}

export default AdminsList;
