import React from "react";
import PageHeader from "../../components/MainLayout/PageHeader";
import {useHistory} from 'react-router-dom';
import {Routes} from "../../helpers/constants";
import API from "../../helpers/API";

const AdminDetails = props => {
    const location = window.location;
    const isEdit = location.pathname.includes('/edit');
    const pageId = isEdit ? props.match.params.id : '';
    const history = useHistory();
    const [userName, setUserName] = React.useState('');
    const [userRole, setUserRole] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [notification, setNotification] = React.useState('');

    React.useEffect(() => getAdminData(), [isEdit]);

    const createNewAdmin = (email, userName, userRole) => {
        if (!!email && !!userName && !!userRole) {
            let userData = {
                'username': userName,
                'user_role': userRole,
                'email': email
            };

            API.post('/admins', userData)
                .then((res) => history.push(Routes.Admins))
                .catch(console.log)
        }
    };

    const editAdmin = (email, userName, userRole) => {
        let userData = {
            'username': userName,
            'user_role': userRole,
            'email': email
        };

        API.put('/admins/' + pageId, userData)
            .then(res => setNotification(res.data))
            .catch(console.log)
    };

    const getAdminData = () => {
        if (!!pageId) {
            API.get('/admins/' + pageId + '/edit')
                .then((response) => {
                    setUserName(response.data.username);
                    setUserRole(response.data.user_role);
                    setEmail(response.data.email);
                }).catch(console.log);
        }
    }

    return (
        <>
            <PageHeader
                title={isEdit ? `Edit admin ${userName}` : 'Create New Admin'}
                notification={notification}
            />
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
                        <input
                            type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className='form-control'
                            id='adminEmail'
                        />
                    </div>
                    <div className='form-group'>
                        <button
                            type="button"
                            onClick={
                                () => isEdit
                                    ? editAdmin(email, userName, userRole)
                                    : createNewAdmin(email, userName, userRole)
                            }
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
