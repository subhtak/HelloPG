import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import TableRow from './TableRow';
import MyGlobleSetting from './MyGlobleSetting';
class DisplayTenant extends Component {
  constructor(props) {
       super(props);
       this.state = {tenants: ''};
     }
     componentDidMount(){
       axios.get(MyGlobleSetting.url + '/api/tenants')
       .then(response => {
         //console.log(response.data);
         this.setState({ tenants: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
     }
     tabRow(){
       if(this.state.tenants instanceof Array){
        //console.log(this.state.tenants);
         return this.state.tenants.map(function(object, i){
            //console.log(i);
            //console.log(object);
             return(<TableRow key={i} obj={object} />);

         })
       }
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
        <h1>Tenants</h1>

        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2 text-right">
            <Link to="/add-item" className="btn btn-success">Add New Tenant</Link>
          </div>
        </div><br />

        <div style={{overflowX: 'auto'}}>
          <table className="table table-hover">
              <thead>
              <tr>
              <th>ID</th>
                  <th>Tenant Name</th>
                  <th>Address</th>
                  <th>Mobiile No.</th>
                  {/* <th>PAN No.</th>
                  <th>Aadhar No.</th> */}
                  <th>Building Name</th>
                  <th>Room No.</th>
                  <th>Allocated on</th>
                  <th>Vacated on</th>
                  <th width="150px">Actions</th>
              </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
          </table>
        </div>
    </div>
    )
  }
}
export default DisplayTenant;