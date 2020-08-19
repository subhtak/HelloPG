
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';


class TableRow extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let uri = MyGlobleSetting.url + `/api/tenants/${this.props.obj.id}`;
    axios.delete(uri)
    .then(response => {
      console.log(response.data);
      //browserHistory.replace('/display-item');
      window.location.reload();
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.name}
          </td>
          <td>
            {this.props.obj.address}
          </td>
          <td>
            {this.props.obj.mobile}
          </td>
          {/* <td>
            {this.props.obj.pan}
          </td>
          <td>
            {this.props.obj.aadhar}
          </td> */}
          <td>
            {this.props.obj.building}
          </td>
          <td>
            {this.props.obj.room}
          </td>
          <td>
            {this.props.obj.date_of_coming}
          </td>
          <td>
            {this.props.obj.date_of_vacating}
          </td>
          <td>
          <form onSubmit={this.handleSubmit}>
            <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
            <span className='delete-box'><input type="submit" value="Delete" className="btn btn-danger"/></span>
         </form>
          </td>
        </tr>
    );
  }
}


export default TableRow;