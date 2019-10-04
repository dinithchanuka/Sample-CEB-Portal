import React from "react";
import Grid from '@material-ui/core/Grid';
import validator from 'validator';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidEmail: false
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
  }

  handleEmailChange(event) {
    this.setState({
      // https://www.npmjs.com/package/validator
      isValidEmail: validator.isEmail(event.target.value)
    });
  }
  render(){
    return (
      <div className="content">
             
      <div className="container">
        <div className="raw">
          <div className="col mt-5 mx-auto h-100">
            <h6 align="left">Customer Registration Form</h6>
            <div className="form-area">
              <h6 align="center">Consumer Detail</h6>

                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Personal/Corporate:</label>
                                <div className="col-sm-6">
                                    <select name="personalCorporate" className="form-control" onChange={this.handleChange}>
                                        <option value="Personal">Personal</option>
                                        <option value="Corporate">Corporate</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">ID Type:</label>  
                                <div className="col-sm-6">                                                
                                    <input
                                        className="checkbox-circle"
                                        name="idType"
                                        value="NIC"
                                        type="checkbox"
                                        
                                        onChange={this.handleChange} /> NIC
                                    <input
                                        className="checkbox checkbox-circle"
                                        name="idType"
                                        type="checkbox"
                                        value="Passport"
                                        
                                        onChange={this.handleChange} /> Passport
                                    <input
                                        value="BUS REG NO"
                                        type="checkbox"
                                        name="idType"
                                        
                                        onChange={this.handleChange} /> BUS REG NO
                                    </div> 
                            </div>
                            <div className="form-group row"> 
                                <label className="col-sm-4 col-form-label">ID No:</label>  
                                <div className="col-sm-6">                                            
                                <input type="text"  name="idNo" className="form-control" onChange={this.handleChange} minLength={10} maxLength={12} />                                             
                                </div>
                                
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Full Name:</label> 
                                <div className="col-sm-6">                                                   
                                <input type="text"  name="fullName" className="form-control"  onChange={this.handleChange} />  
                                </div>                                           
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">First Name(Initials):</label> 
                                <div className="col-sm-6">                             
                                <input type="text" name="firstName" className="form-control"  onChange={this.handleChange} maxLength={15} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label"> Last Name:</label> 
                                <div className="col-sm-6">                                               
                                <input type="text" name="lastName" className="form-control"  onChange={this.handleChange}  maxLength={16}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label"> CEB Employee </label>
                                    <div className="col-sm-6"> 
                                        <input
                                            name="cebEmployee"
                                            type="checkbox"
                                            value="Yes"
                                            
                                            onChange={this.handleChange} /> Yes
                                        <input
                                                name="cebEmployee"
                                                type="checkbox"
                                                value="No"
                                                onChange={this.handleChange} /> No
                                    </div>
                            </div>
                            
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Email:</label> 
                                <div className="col-sm-6">                                                
                                <input type="email"  name="email" className={"form-control " + (this.state.isValidEmail ? 'is-valid': 'is-invalid')} onChange={this.handleEmailChange} required />
                                </div>
                            </div>
                        </div>  
                        <div className="col-md-6"> 
                            <label > Street Address:</label> 
                              <div className="form-group row">
                                <label className="col-sm-4 col-form-label"> Line 1 : </label> 
                                <div className="col-sm-6"> 
                                <input type="text" name="streetAddress" className="form-control" onChange={this.handleChange} maxLength={30}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label"> Suburb(Line 2)</label> 
                                <div className="col-sm-6"> 
                                <input type="text" name="suburb" className="form-control" onChange={this.handleChange} maxLength={25} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label"> City(Line 3) </label> 
                                <div className="col-sm-6"> 
                                <input type="text" name="city" className="form-control" onChange={this.handleChange} maxLength={20} />
                                </div>                                           
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Postal Code:</label>
                                <div className="col-sm-6">                                                    
                                <input type="number"  name="postalCode" className="form-control" onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Telephone No:</label>
                                <div className="col-sm-6">    
                                <input type="text"  name="telephoneNo" className="form-control" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-4 col-form-label">Mobile No/ SMS No:</label>
                                <div className="col-sm-6"> 
                                </div>
                            </div>
                            <div className="form-group row">
                                <label lassName="col-sm-4 col-form-label"> Prefered Language</label>
                                <div className="col-sm-6"> 
                                    <input
                                        name="preferredLanguage"
                                        type="checkbox"
                                        value="Sinhala"
                                        
                                        onChange={this.handleChange} /> Sinhala
                                    <input
                                        name="preferredLanguage"
                                        value="English"
                                        type="checkbox"
                                    
                                        onChange={this.handleChange} /> English
                                </div>
                            </div>
                        </div>
                        <div align="center">
                            <button type="submit" className="btn btn-outline-primary" disabled={false}>Save</button>
                            {/* <button  className="btn btn-outline-light">Modify</button>
                            <button  className="btn btn-outline-light">Exit</button>
                            <button  className="btn btn-outline-light">Clear</button> */}
                        </div>                                
                    </div>
                </form>
            </div>
          </div>
        </div>
    </div>
    </div>
    );
  }
}

export default Form;