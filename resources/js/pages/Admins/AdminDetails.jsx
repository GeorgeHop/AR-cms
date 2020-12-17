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
    const [email, setEmail] = React.useState('');
    const [notification, setNotification] = React.useState('');

    React.useEffect(() => getAdminData(), [isEdit]);

    const handleAdminData = () => {
        if (!!email && !!userName) {
            let userData = {
                'username': userName,
                'email': email
            };
            const method = isEdit ? 'put' : 'post';

            API[method](isEdit ? `/admins/${pageId}` : '/admins', userData)
                .then(res => isEdit ? '' : history.push(Routes.Admins)).catch((console.log));
        } else {
            alert('Please fill out all required fields');
        }
    }

    const getAdminData = () => {
        if (!!pageId) {
            API.get('/users/' + pageId)
                .then((response) => {
                    console.log(response)
                    setUserName(response.data.username);
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
                        <select className="form-control" id="admin-role">
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
                            onClick={() => handleAdminData()}
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
