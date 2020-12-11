import React from 'react';
import API from "../helpers/API";
import {useHistory} from 'react-router-dom';
import {Routes} from "../helpers/constants";

const Registration = () => {
    const history = useHistory();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirm, setConfirm] = React.useState('');
    const [name, setName] = React.useState('');

    const Registration = (email, password, confirm, name) => {
        API.post('/registration', {
            email: email,
            password: password,
            password_confirmation: confirm,
            user_name: name,
        }).then((res) => {
            history.push(Routes.Login);
        }).catch(console.log)
    }

    return (
        <div className='ar-container'>
            <div className='card card-shadow' style={{width: '20rem'}}>
                <div className='card-header'>
                    Login
                </div>
                <div className='card-body'>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                               className="form-control" id="email" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">User Name</label>
                        <input type="name" value={name} onChange={e => setName(e.target.value)} className="form-control"
                               id="name" placeholder="Enter user name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                               className="form-control" id="password"
                               placeholder="Password"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordConfirm">Password</label>
                        <input type="password" value={confirm} onChange={e => setConfirm(e.target.value)}
                               className="form-control" id="passwordConfirm"
                               placeholder="Confirm password"/>
                    </div>
                    <button
                        onClick={() => Registration(email, password, confirm, name)}
                        className="btn btn-primary btn-block"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Registration;
