import React from 'react';
import PageHeader from "../../components/MainLayout/PageHeader";
import {Routes} from "../../helpers/constants";
import {NavLink, useHistory} from "react-router-dom";
import Pagination from "../../components/MainLayout/Pagination";
import {API} from "../../helpers/API";

const AdminsList = () => {
    const history = useHistory();
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [currentPage, setCurrentPage] = React.useState(null);
    const [pageLinks, setPageLinks] = React.useState([]);
    const [paginationData, setPaginationData] = React.useState([]);


    React.useEffect(() => getData(), []);

    const getData = () => {
        API.get(`/admins`).then((res) => {
            console.log(res.data)
            setPaginationData(res.data);
            setPageLinks(res.data.links);
            setUsers(res.data.data);
            setLoading(false);
        }).catch(console.log);
    }

    const deleteUser = id => {
        API.delete('/admins/' + id)
            .then(() => {
                getData();
            }).catch(console.log);
    }

    if (loading)
        return (
            <div className="h-100 d-flex justify-content-center" style={{alignItems: 'center'}}>
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )

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
                {users.map((user, index) => (
                    <tr key={index}>
                        <th scope="row">{user.id}</th>
                        <td>{user.user_name}</td>
                        <td>{user.user_role}</td>
                        <td>
                            <NavLink type="button" to={Routes.AdminEdit(user.id)}
                                     className="btn btn-info btn-sm m-1">Edit
                            </NavLink>
                            <button type="button" onClick={() => deleteUser(user.id)}
                                    className="btn btn-danger btn-sm m-1">Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <Pagination paginationData={paginationData}/>
        </div>
    );
}

export default AdminsList;
