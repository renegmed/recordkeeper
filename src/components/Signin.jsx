import React, { Component } from 'react';
import NavigationBar from './navigation/NavigationBar.jsx';

export default class Signin extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    console.log("Signin.jsx render()....")
    const { handleSignIn, userSession } = this.props;
 
    return (
      <div className="panel-landing" id="section-1">
        <NavigationBar userSession={userSession} handleSignIn={handleSignIn}/>
         
      </div>
    );
  }
}
