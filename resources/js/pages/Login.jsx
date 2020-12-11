import React from 'react';
import API from "../helpers/API";
import {useHistory} from 'react-router-dom';
import {Routes} from "../helpers/constants";

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const Login = (email, password) => {
        API.post('/login', {
            email: email,
            password: password,
        }).then((res) => {
            localStorage.setItem('userData', JSON.stringify({
                'userToken': res.data.access_token,
                'expiresDate': res.data.expires_at
            }));
            history.push(Routes.Dashboard);
            console.log(res);
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
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                               className="form-control" id="password"
                               placeholder="Password"/>
                    </div>
                    <button
                        onClick={() => Login(email, password)}
                        className="btn btn-primary btn-block"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;
