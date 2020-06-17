import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {LoggedInContext} from '../Context';


export default class SecureRoute extends React.Component {

    render()
    {
        let {component, path} = this.props; // this is destructuring the keys passed in through props
        let loggedIn = this.context; // using the context that was specified in the contextType

        if (!loggedIn)
        {
            console.log('not logged in');
            component = <Redirect to='/login' />
        }

        return (
            <Route exact path={path}>
                {component}
            </Route>
        )
    }
}

SecureRoute.contextType = LoggedInContext;