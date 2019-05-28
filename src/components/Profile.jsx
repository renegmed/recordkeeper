import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import NavigationBar from './navigation/NavigationBar.jsx';
import {  Person, UserSession, AppConfig, } from 'blockstack';

import LocationDropdown from './LocationDropdown.jsx';
import LocationCategoryDropdown from './LocationCategoryDropdown.jsx';

const avatarFallbackImage = 'https://s3.amazonaws.com/onename/avatar-placeholder.png';

export default class Profile extends Component {
  constructor(props) {
  	super(props);
    this.userSession = new UserSession(new AppConfig(['store_write']))
 
  }

  signOut(e) {
    console.log("Profile.jsx Signing out....")
    e.preventDefault()
    this.userSession.signUserOut()
    window.location='/'
  }

  render() {
    console.log("Profile.jsx render() ...")
    const { userSession } = this.props;
    //const { person } = this.state;
    const username = this.userSession.loadUserData().username;
    console.log("Profile.jsx username: ", username)
    return (
      <section>
        <div>
          <NavigationBar userSession={userSession} signOut={this.signOut.bind(this)} username={username}/>
        </div>
        <Switch>
          <Route 
            path='/location'
            render={
              routeProps => <LocationDropdown
               {...routeProps}
              />
            }
          />
          <Route 
            path='/categories'
            render={
              routeProps => <LocationCategoryDropdown
              {...routeProps}
             />
            }
          />
      </Switch>   

      </section>
     
    );
  }

  componentWillMount() {
    const { userSession } = this.props;
    this.setState({
      person: new Person(userSession.loadUserData().profile),
    });
  }
}
