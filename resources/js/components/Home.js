import React, {Component} from 'react';
import {browserHistory} from 'react-router';


class Home extends Component {
  
    render() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>

                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
         )
    }
}
export default Home;