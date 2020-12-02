import React from 'react';

const Login = () => {
    return (
        <div className='ar-container'>
            <div className='card card-shadow' style={{width: '20rem'}}>
                <div className='card-header'>
                    Login
                </div>
                <div className='card-body'>
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password"
                                   placeholder="Password"/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
