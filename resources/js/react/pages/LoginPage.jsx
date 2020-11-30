import React from 'react';
import Button from "../components/buttons/Button";
import Input from "../components/form/Input";

const LoginPage = () => {
    return (
        <div className='container column is-10'>
            <section className='hero is-fullheight'>
                <div className='hero-body'>
                    <div className='container'>
                        <div className='columns is-centered'>
                            <div className='column is-5-tablet is-5-desktop is-4-widescreen'>
                                <div className='box'>
                                    <h1 className='title is-4 is-spaced'>Log in</h1>
                                    <Input isLoading={false} type={'text'} leftSideIconClass={'fas fa-envelope'}
                                           placeholder={'login'}/>
                                    <Input isLoading={false} type={'password'} leftSideIconClass={'fas fa-lock'}
                                           placeholder={'password'}/>
                                    <div className='field'>
                                        <Button buttonText={'Log in'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default LoginPage;
