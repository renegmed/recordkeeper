import React, { Component } from 'react' 
import { Link } from 'react-router-dom'
import '../../styles/style.css'

class NavigationBar extends Component {

  showProfile(username)  { 
    console.log("Navigation Bar: Username:", username)
    return (
      <div>

        <div className="collapse navbar-collapse" id="navbarDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to={`/location`}>Location</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/categories`}>Categories</Link>
            </li>
          </ul>
        </div>   

        {username}  
        <button 
          className="btn btn-primary"
          onClick={this.props.signOut}
        >
        Sign Out
        </button>
      </div>
     
    );    
  }
  
  toSignIn() {
    return (
    <button className="btn btn-primary"
    onClick={this.props.handleSignIn}>
      Sign In
    </button>
    );     
  }
  
  render() {
    const { userSession, username} = this.props
    
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dar fixed-top">
        <Link className="navbar-brand" to="/">Record Keeper</Link>

           
          { userSession.isUserSignedIn() ?     
              this.showProfile(username)
           : 
              this.toSignIn()
          }
       
      </nav>
    )
  }
}



export default NavigationBar