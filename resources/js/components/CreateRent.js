import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';


class CreateRent extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: {},
      errors: {},
      tenants: [] 
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      input["tenant_id"] = "";
      input["rent"] = "";
      input["for_month_of"] = "";
      input["mode_of_payment"] = "";
      input["date_of_payment"] = "";
      this.setState({input:input});
      //console.log(this.state.input);

      let uri = MyGlobleSetting.url + '/api/rents';
      axios.post(uri, this.state.input).then((response) => {
          console.log(response.data);
          this.setState({ input: response.data });
        })
        .catch(function (error) {
          console.log(error);
        })
        browserHistory.push('/payment-list');
      }
    }
      
    validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
      if (!input["tenant_id"]) {
        isValid = false;
        errors["tenant_id"] = "Please select tenant's name.";
      }
      this.setState({
        errors: errors
      });
      return isValid;
  }

  render() {
    return (
    <div>
        <h1>Add New Rent</h1>
        <form className='content' onSubmit={this.handleSubmit}>
            <div className="form-group row">
                <label htmlFor="tenant_id" className="col-sm-2 col-form-label">Enter Tenant Name</label>
                <div className="col-sm-auto">
                  <select className="form-control" name="tenant_id" onChange={this.handleChange}>
                    <option value=""></option>
                    {this.state.tenants.map((tenant, index) => (
                      <option  key={index} value={tenant.id} >{tenant.name}</option>
                    ))}
                    </select>
                </div>
                <div className="col-form-label text-danger">{this.state.errors.tenant_id}</div>
            </div>
            <div className="form-group row">
                <label htmlFor="rent" className="col-sm-2 col-form-label">Monthly Rent (in Rupees)</label>
                <div className="col-sm-auto">
                  <select className="form-control" name="rent"
                    onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="Rs.12000/- (single room)">Rs.12000/- (single room)</option>
                    <option value="Rs.9000/- (twin sharing)">Rs.9000/- (twin sharing)</option>
                    <option value="Rs.6000/- (three sharing)">Rs.6000/- (three sharing)</option>
                  </select>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="for_month_of" className="col-sm-2 col-form-label">For the month of</label>
                <div className="col-sm-auto">
                  <select className="form-control" name="for_month_of"
                    onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="January">January</option>
                    <option value="Febuary">Febuary</option>
                    <option value="March">March</option>
                    <option value="April">April</option> 
                    <option value="May">May</option>
                    <option value="June">June</option> 
                    <option value="July">July</option>
                    <option value="August">August</option> 
                    <option value="September">September</option>
                    <option value="October">October</option> 
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="mode_of_payment" className="col-sm-2 col-form-label">Select Mode of Payment</label>
                <div className="col-sm-auto">
                  <select className="form-control" name="mode_of_payment" 
                    onChange={this.handleChange}>
                    <option value=""></option>
                    <option value="Cash">Cash</option>
                    <option value="Card">Card</option>
                    <option value="UPI">UPI</option>
                    <option value="NEFT">NEFT</option>
                  </select>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="date_of_payment" className="col-sm-2 col-form-label">Date of Payment</label>
                <div className="col-sm-2">
                    <input type="date" className="form-control" name="date_of_payment" onChange={this.handleChange} />
                </div>
            </div>
            <div className="pt-4 form-group">
              <button className="btn btn-primary">Add Rent</button>
            </div>
        </form>
    </div>
      )
    }
}
export default CreateRent;