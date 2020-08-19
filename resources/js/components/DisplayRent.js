import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';
class DisplayRent extends Component {
  constructor(props) {
       super(props);
       this.state = {
          rents: []
        };
     }
     componentDidMount(){
       axios.get(MyGlobleSetting.url + '/api/rents')
       .then(response => {
         //console.log(response.data);
         this.setState({ rents: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     
  render(){
      //console.log(this.tabRow());
      const divStyle={
        overflowY: 'scroll',
        border:'1px solid red',
        width:'500px',
        float: 'left',
        height:'500px',
        position:'relative'
      };
    return (
      <div>
        <h1>Rents</h1>

        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2 text-right">
          </div>
        </div><br />

        <div style={{overflowX: 'auto'}}>
          <table className="table table-hover">
              <thead>
              <tr>
                  <th>Tenant's Name</th>
                  <th>Monthly Rent</th>
                  <th>For the month of</th>
                  <th>Mode of Payment</th>
                  <th>Date of Payment</th>
              </tr>
              </thead>
              <tbody>
                {this.state.rents.map((rentitem, index) => (
                  <tr>
                    <td>{rentitem.tenant_name}</td>
                    <td>{rentitem.rent}</td>
                    <td>{rentitem.for_month_of}</td>
                    <td>{rentitem.mode_of_payment}</td>
                    <td>{rentitem.date_of_payment}</td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
    </div>
    )
  }
}
export default DisplayRent;