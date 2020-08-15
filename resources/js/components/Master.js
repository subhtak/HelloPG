import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';


class Master extends Component {
  render(){
      //console.log(this.props);
    return (
      <div className="container">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
                <h2 className="navbar-brand">
                Hello PG
                </h2>
            </div>
            <ul className="nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="add-item">Create Tenant</Link></li>
              <li><Link to="display-item">Tenants</Link></li>
            </ul>
          </div>
        </nav>    
        <div className='content'> 
            {this.props.children == null &&
                <div className="welcome-msg">
                Welcome to <strong className='head-border'>Hello PG</strong>
            </div>
            }
            {this.props.children}
        </div>
      </div>
    )
  }
}
export default Master;