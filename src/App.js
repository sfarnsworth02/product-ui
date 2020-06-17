
import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router, 
  Switch, 
  Route
          } from 'react-router-dom';
import Config from './config';
import SecureRoute from './components/SecureRoute';
import Login from './pages/Login';
import Product from './pages/product/Product';
import Assets from './pages/assets/Assets';
import Sets from './pages/sets/Sets';
import {
  MergedConstContext,
  LoggedInContext,
  LoggedInUserContext,
  } from './Context';

// function handleLogin() 
// {
  // Use context to handle logged in state
// }

export default class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      isLoggedIn: false,
      user: {},
      productFilter: '',
      action: '',
    }
  }

  logMeIn = (event) =>
  {
    event.preventDefault();
    const route = `${Config.apiPath}/login`;
    const [email, password] = [].slice.call(event.target.elements);  // sets the target elements into an array
    const body = {email: email.value, password: password.value}; // sets the target elements to a value
    let fetchOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(body) 
    }
    console.log('body: ', body);
    console.log('fetchOptions: ', fetchOptions);
    console.log('route: ', route);
    fetch(route, fetchOptions)
    .then((response) => { 
      if (response.status !== 200){
        return ('Did not go through: ', response);
      }
      return response.json(); 
    
    })
    .then((data) => { 
      console.log('data: ', data);
      if(data.status && data.status !== 200 ) 
      {
        return null;
      }
      this.setState({
        isLoggedIn: true,
        user: data,
      })
    })
    .catch((err) => { console.log('error: ', err); })
 
  }

  logMeOut = (event) =>
  {
    event.preventDefault();
    this.setState({
      isLoggedIn: false,
    });
  }

  render()
  {
    console.log('user: ', this.state.user);
    return (
      <Router>
        <Switch>
          <MergedConstContext.Provider value={this.state}>
            <LoggedInContext.Provider value={this.state.isLoggedIn}> {/* LoggedInContext is being set to this.state.isLoggedIn */}
              <LoggedInUserContext.Provider value={this.state.user}> {/* LoggedInUserContext is being set to this.state.user */}
                <Route exact path='/login' >
                  <Login login={this.logMeIn} />  
                  {/*  */}
                </Route> 
                <SecureRoute exact path="/" component={<Product />} />
                <SecureRoute path="/products" component={<Product />} />
                <SecureRoute path="/assets" component={<Assets />} />
                <SecureRoute path="/sets" component={<Sets />} />
              </LoggedInUserContext.Provider>
            </LoggedInContext.Provider>
          </MergedConstContext.Provider>
        </Switch>
      </Router>
    )
  }
}
  


