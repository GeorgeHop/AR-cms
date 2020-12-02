import React from 'react';
import PageHeader from "../../components/MainLayout/PageHeader";
import {Routes} from "../../helpers/constants";

const AdminsList = () => {
    return (
        <div>
            <PageHeader title={'Admins List'} buttonLabel={'Add New Admin'} buttonRoute={Routes.AdminCreate}/>
            <table className="table">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Username</th>
                    <th>User role</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Govnoed</td>
                    <td>Admin</td>
                    <td>
                        <button type="button" className="btn btn-info btn-sm m-1">Edit</button>
                        <button type="button" className="btn btn-danger btn-sm m-1">Delete</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Govnoed</td>
                    <td>Admin</td>
                    <td>
                        <button type="button" className="btn btn-info btn-sm m-1">Edit</button>
                        <button type="button" className="btn btn-danger btn-sm m-1">Delete</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Govnoed</td>
                    <td>Admin</td>
                    <td>
                        <button type="button" className="btn btn-info btn-sm m-1">Edit</button>
                        <button type="button" className="btn btn-danger btn-sm m-1">Delete</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Govnoed</td>
                    <td>Admin</td>
                    <td>
                        <button type="button" className="btn btn-info btn-sm m-1">Edit</button>
                        <button type="button" className="btn btn-danger btn-sm m-1">Delete</button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Govnoed</td>
                    <td>Admin</td>
                    <td>
                        <button type="button" className="btn btn-info btn-sm m-1">Edit</button>
                        <button type="button" className="btn btn-danger btn-sm m-1">Delete</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default AdminsList;
