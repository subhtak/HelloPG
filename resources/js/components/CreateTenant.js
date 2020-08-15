import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';


class CreateTenant extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: {},
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    let input = this.state.input;
  
    input[event.target.name] = event.target.value;
    this.setState({
      input
    });
  }
  handleSubmit(e){
    e.preventDefault();
    if(this.validate()){
      let input = {};
      input["name"] = "";
      input["address"] = "";
      input["mobile"] = "";
      input["aadhar"] = "";
      input["pan"] = "";
      input["building"] = "";
      input["room"] = "";
      input["date_of_coming"] = "";
      input["date_of_vacating"] = "";
      this.setState({input:input});
      //console.log(this.state.input);

      let uri = MyGlobleSetting.url + '/api/tenants';
      axios.post(uri, this.state.input).then((response) => {
        browserHistory.push('/display-item');
      });
    }
  }
  validate(){
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    if (!input["name"]) {
      isValid = false;
      errors["name"] = "Please enter tenant's name.";
    }

    if (!input["mobile"]) {
      isValid = false;
      errors["mobile"] = "Please enter your mobile number.";
    }

    if (typeof input["mobile"] !== "undefined") {
        
      var pattern = new RegExp(/^[0-9\b]+$/);
      if (!pattern.test(input["mobile"])) {
        isValid = false;
        errors["mobile"] = "Please enter only number.";
      }else if(input["mobile"].length != 10){
        isValid = false;
        errors["mobile"] = "Please enter valid mobile number.";
      }
    }

    this.setState({
      errors: errors
    });

    return isValid;
}

    render() {
      const toInputUppercase = e => {
        e.target.value = ("" + e.target.value).toUpperCase();
      };
    return (
    <div>
        <h1>Create Tenant</h1>
        <form className='content' onSubmit={this.handleSubmit}>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-2 col-form-label">Tenant Name</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" name="name" onChange={this.handleChange} />
                </div>
                <div className="col-form-label text-danger">{this.state.errors.name}</div>
            </div>
            <div className="form-group row">
                <label htmlFor="address" className="col-sm-2 col-form-label">Address</label>
                <div className="col-sm-5">
                    <input type="text" className="form-control" name="address" onChange={this.handleChange} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="mobile" className="col-sm-2 col-form-label">Mobile Number</label>
                <div className="col-sm-2">
                    <input type="text" className="form-control" name="mobile" 
                    onChange={this.handleChange} />
                </div>
                <div className="col-form-label text-danger">{this.state.errors.mobile}</div>
            </div>
            <div className="form-group row">
                <label htmlFor="pan" className="col-sm-2 col-form-label">PAN Number</label>
                <div className="col-sm-2">
                    <input type="text" className="form-control" name="pan" 
                    onInput={toInputUppercase} onChange={this.handleChange} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="aadhar" className="col-sm-2 col-form-label">Aadhar Number</label>
                <div className="col-sm-3">
                    <input type="text" className="form-control" name="aadhar" 
                    onInput={toInputUppercase} onChange={this.handleChange} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="building" className="col-sm-2 col-form-label">Select PG Building</label>
                <div className="col-sm-2">
                  <select className="form-control" name="building"
                    onChange={this.handleChange}>
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
                  <select className="form-control" name="room" 
                    onChange={this.handleChange}>
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
                    <input type="date" className="form-control" name="date_of_coming" onChange={this.handleChange} />
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="date_of_vacating" className="col-sm-2 col-form-label">Vacated Date</label>
                <div className="col-sm-2">
                    <input type="date" className="form-control" name="date_of_vacating" onChange={this.handleChange} />
                </div>
            </div>

            <div className="pt-4 form-group">
              <button className="btn btn-primary">Add Tenant</button>
            </div>
        </form>
    </div>
      )
    }
}
export default CreateTenant;