import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding-top: 25vh;
    padding-bottom: 25vh;

    .form-control:focus {
        color: #495057;
        background-color: #fff;
        border-color: #6c757d;
        outline: 0;
        box-shadow: 0 0 0 1px #6c757d;
    }
    
`;

const LOGIN = gql`
    mutation login($user: LoginType!) {
        loginUser(user: $user) {
        accessToken
        message
        status
        }
    }
`;

const LoginUser = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [login, {error, loading}] = useMutation(LOGIN);
    const history = useHistory();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleOnSubmit = async e => {
        e.preventDefault();

        try {
            const { data } = await login({
                variables:{
                user:{ email, password }
            }});

            const { accessToken } = data.loginUser;
            localStorage.setItem('token', accessToken);
            history.push('/projects');
        } catch (err) {
            console.log({err})
        }

    }
    
    return (
        <Wrapper className="row">
            <div className="col-md-4 offset-md-4">
                <form onSubmit={handleOnSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" value={email} onChange={handleEmailChange} className="form-control" id="email" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={password} onChange={handlePasswordChange} className="form-control" id="password"/>
                    </div>
                    <button type="submit" disabled={loading} className="btn btn-outline-secondary btn-lg btn-block">SIGN IN</button>
                </form>
                {
                    error && <p className="text-danger text-center">Either username or password is incorrect</p>
                }
                
            </div>
        </Wrapper>
    )
}

export default LoginUser;