import React from 'react';
import PageHeader from "../../components/MainLayout/PageHeader";
import {Routes} from "../../helpers/constants";
import {NavLink} from "react-router-dom";
import Pagination from "../../components/MainLayout/Pagination";
import API from "../../helpers/API";
import PaginationTable from "../../components/pagination/PaginationTable";
import Loader from "../../components/Loader";

const AdminsList = () => {
    const [users, setUsers] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [lastPage, setLastPage] = React.useState();

    React.useEffect(() => pageChange(), []);

    const deleteUser = (id, name) => {
        let result = confirm(`Are you sure do you want to delete ${name} ?`);

        if (!result)
            return;

        API.delete('/admins/' + id)
            .then(() => {
                pageChange();
            }).catch(console.log);
    }

    const pageChange = pageId => {
        API.get(`/admins?page=${pageId}`)
            .then((res) => {
                setLastPage(res.data.last_page);
                setCurrentPage(res.data.current_page);
                setUsers(res.data.data);
                setLoading(false);
            })
            .catch(console.log)
    }

    return (
        <>
            <Loader isLoading={loading}/>
            <div>
                <PageHeader
                    title={'Admins List'}
                    buttonLabel={'Add New Admin'}
                    buttonRoute={Routes.AdminsCreate}
                />
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
                                <NavLink type="button" to={Routes.AdminsEdit(user.id)}
                                         className="btn btn-info btn-sm m-1">Edit
                                </NavLink>
                                <button type="button" onClick={() => deleteUser(user.id, user.user_name)}
                                        className="btn btn-danger btn-sm m-1">Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                <Pagination
                    currentPage={currentPage}
                    lastPage={lastPage}
                    pageChange={(pageId) => pageChange(pageId)}
                />


                <PaginationTable url={'/admins'}/>
            </div>
        </>
    );
}

export default AdminsList;
