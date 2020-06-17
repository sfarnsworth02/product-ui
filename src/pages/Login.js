
import React, { Component as RC } from 'react';
import { Redirect } from 'react-router-dom';
import { MergedConstContext } from '../Context';
import Page from '../components/Page';

export default class Login extends RC {
    constructor()
    {
        super();
        this.state = {
        }
    }

    handleChange = (event) => 
    {
        const fieldName = event.target.getAttribute('name');
        const stateObj = {};
        stateObj[fieldName] = event.target.value;
        stateObj.message = '';
        stateObj.messageType = '';
        this.setState(stateObj);
    }

    render()
    {
        let loggedIn = this.context.isLoggedIn;
        if (loggedIn)
        {
            console.log('re-directing')
            console.log('context: ', loggedIn)
            return <Redirect to='/products' />;
        }
        console.log('state: ', this.state)
        return(
            <Page className='login-page' title='Login'>
                <form className='login-form' onSubmit={this.props.login}>
                {/* do i even need a submit here since I have the button? */}
                    <div className='form-input'>
                        <label>Email:</label>
                        <input 
                            name='email' 
                            type='text' 
                            value={this.state.email} 
                            onChange={this.handleChange}
                            />
                            <label>Password:</label>
                        <input 
                            name='password' 
                            type='password' 
                            value={this.state.password}  
                            onChange={this.handleChange}   
                        />
                        <input type='submit' value='Login' />
                    </div>
                </form>
            </Page>
                
        )
    }
}

Login.contextType = MergedConstContext;