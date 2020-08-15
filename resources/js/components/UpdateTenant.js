import React, {Component} from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';


class UpdateTenant extends Component {
  constructor(props) {
    //console.log(props);
    super(props);
    this.state = {name: '', address: '', mobile: '', pan: '', aadhar: '', building: '', room: '', date_of_coming: '', date_of_vacating: ''};
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeMobile = this.handleChangeMobile.bind(this);
    this.handleChangePan = this.handleChangePan.bind(this);
    this.handleChangeAadhar = this.handleChangeAadhar.bind(this);
    this.handleChangeBuilding = this.handleChangeBuilding.bind(this);
    this.handleChangeRoom = this.handleChangeRoom.bind(this);
    this.handleChangeAllocated = this.handleChangeAllocated.bind(this);
    this.handleChangeVacated = this.handleChangeVacated.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    axios.get(MyGlobleSetting.url + `/api/tenants/${this.props.params.id}/edit`)
    .then(response => {
      this.setState({ 
        name: response.data.name,
        address: response.data.address,
        mobile: response.data.mobile, 
        pan: response.data.pan, 
        aadhar: response.data.aadhar, 
        building: response.data.building, 
        room: response.data.room, 
        date_of_coming: response.data.date_of_coming, 
        date_of_vacating: response.data.date_of_vacating
      });
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  handleChangeName(e){
    this.setState({
        name: e.target.value
    })
  }
  handleChangeAddress(e){
    this.setState({
      address: e.target.value
    })
  }
  handleChangeMobile(e){
    this.setState({
        mobile: e.target.value
    })
  }
  handleChangeAadhar(e){
    this.setState({
        aadhar: e.target.value
    })
  }
  handleChangePan(e){
    this.setState({
        pan: e.target.value
    })
  }
  handleChangeBuilding(e){
    this.setState({
        building: e.target.value
    })
  }
  handleChangeRoom(e){
    this.setState({
        room: e.target.value
    })
  }
  handleChangeAllocated(e){
    this.setState({
        date_of_coming: e.target.value
    })
  }
  handleChangeVacated(e){
    this.setState({
        date_of_vacating: e.target.value
    })
  }


  handleSubmit(event) {
    event.preventDefault();
    const tenants = {
      name: this.state.name,
      address: this.state.address,
      mobile: this.state.mobile,
      aadhar: this.state.aadhar,
      pan: this.state.pan,
      building: this.state.building,
      room: this.state.room,
      date_of_coming: this.state.date_of_coming,
      date_of_vacating: this.state.date_of_vacating
    }
    let uri = MyGlobleSetting.url + '/api/tenants/'+this.props.params.id;
    axios.patch(uri, tenants).then((response) => {
          this.props.router.push('/display-item');
    });
  }
  render(){
    return (
      <div>
        <h1>Update Tenant</h1>
        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/display-item" className="btn btn-success">Return to Tenant</Link>
          </div>
        </div>
        <form className='content' onSubmit={this.handleSubmit}>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">Tenant Name</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="name" 
                    value={this.state.name} onChange={this.handleChangeName} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" id="address" 
                    value={this.state.address} onChange={this.handleChangeAddress} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="mobile" className="col-sm-2 col-form-label">Mobile Number</label>
                <div className="col-sm-2">
                    <input type="text" className="form-control" id="mobile" 
                    value={this.state.mobile} onChange={this.handleChangeMobile} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="pan" className="col-sm-2 col-form-label">PAN Number</label>
                <div className="col-sm-2">
                    <input type="text" className="form-control" id="pan" 
                    value={this.state.pan} onChange={this.handleChangePan} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="aadhar" className="col-sm-2 col-form-label">Aadhar Number</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" id="aadhar" 
                    value={this.state.aadhar} onChange={this.handleChangeAadhar} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="building" className="col-sm-2 col-form-label">Select PG Building</label>
                <div className="col-sm-2">
                  <select className="form-control" id="building" 
                    selectedValue={this.state.building}
                    value={this.state.building} onChange={this.handleChangeBuilding}>
                    <option value=""></option>
                    <option value="B1">B1</option>
                    <option value="B2">B2</option>
                    <option value="B3">B3</option>
                    <option value="B4">B4</option> 
                    <option value="B5">B5</option>
                  </select>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="room" className="col-sm-2 col-form-label">Select Room</label>
                <div className="col-sm-1">
                  <select className="form-control" id="room" 
                    selectedValue={this.state.room}
                    value={this.state.room} onChange={this.handleChangeRoom}>
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option> 
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="date_of_coming" className="col-sm-2 col-form-label">Allocated Date</label>
                <div className="col-sm-2">
                    <input type="date" className="form-control" id="date_of_coming" 
                    value={this.state.date_of_coming} onChange={this.handleChangeAllocated} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="date_of_vacating" className="col-sm-2 col-form-label">Vacated Date</label>
                <div className="col-sm-2">
                    <input type="date" className="form-control" id="date_of_vacating" 
                    value={this.state.date_of_vacating} onChange={this.handleChangeVacated} />
                </div>
            </div>

            <div className="pt-4 form-group">
                <button className="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
    )
  }
}
export default withRouter(UpdateTenant);