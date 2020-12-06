import React from "react";
import PageHeader from "../../components/MainLayout/PageHeader";
import {useHistory} from 'react-router-dom';
import {Routes} from "../../helpers/constants";
import * as axios from "axios";

const AdminDetails = props => {
    const location = window.location;
    const isEdit = location.pathname.includes('/admins-edit/');
    const pageId = isEdit ? props.match.params.id : '';
    const history = useHistory();
    const [userName, setUserName] = React.useState('');
    const [userRole, setUserRole] = React.useState('');
    const [email, setEmail] = React.useState('');


    // React.useEffect(() => getAdminData(), [isEdit]);

    const createNewAdmin = (email, userName, userRole) => {
        if (!!email && !!userName && !!userRole) {
            let userData = {
                'user_name': userName,
                'user_role': userRole,
                'email': email
            };

            axios.post('api/admins', userData)
                .then(res => history.push(Routes.AdminsList))
                .catch(console.log)
        }
    };


    // WIP Option to edit admin
    // const editAdmin = (id, email, userName, userRole) => {
    //     let userData = {
    //         'user_name': userName,
    //         'user_role': userRole,
    //         'email': email
    //     };
    //
    //     axios.put('api/admins/' + id)
    //         .then((res) => {
    //
    //         })
    // };
    //
    // const getAdminData = () => {
    //     if (!!pageId) {
    //         axios.get('api/admins/' + pageId + '/edit')
    //             .then((response) => console.log(response))
    //     }
    // }

    return (
        <>
            <PageHeader title={isEdit ? `Edit admin ${userName}` : 'Create New Admin'}/>
            <div className='col-md-5'>
                <form>
                    <div className='form-group'>
                        <label htmlFor='adminName'>Admin name</label>
                        <input
                            type='text'
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                            className='form-control'
                            id='adminName'
                            placeholder='AdminName'/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor="admin-role">Admin role</label>
                        <select className="form-control" id="admin-role" value={userRole}
                                onChange={e => setUserRole(e.target.value)}>
                            <option value={'Admin'}>Admin</option>
                            <option value={'Scenarist'}>Scenarist</option>
                            <option value={'Support'}>Support</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='adminEmail'>Email</label>
                        <input type='email' value={email} onChange={e => setEmail(e.target.value)}
                               className='form-control' id='adminEmail'/>
                    </div>
                    <div className='form-group'>
                        <button
                            type="button"
                            onClick={() => createNewAdmin(email, userName, userRole)}
                            className="btn btn-outline-primary">
                            {isEdit ? `Edit admin` : 'Create New Admin'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdminDetails;
