import React, { Component } from 'react'
//import '../../css/applicationForm.css'
import NumberFormat from 'react-number-format';
// import Navbar from '../Navbar'

class Applicant extends Component {
   
    constructor() {
        super();
        this.state = {
            item:{idNo:"",email:"",firstName:"",fullName:"",idType:"",lastName:"",mobileNo:"",cebEmployee:"",
            postalCode:"",preferredLanguage:"",personalCorporate:"",streetAddress:"",suburb:"",city:"",telephoneNo:""},   
            errors:{email:"",mobileNo:"",telephoneNo:"",idNo:""}
          };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }

    handleChange(event) {
        const { name, value } = event.target;
        let errors = this.state.errors;
        let item = {...this.state.item};
        item[name] = value;
        
        const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
        const mobileRegex =RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
        const telephoneRegex =RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
        const idRegex=RegExp(/^([0-9]{9}[x|X|v|V]|[0-9]{12})$/);

        switch(name){
            case 'email':
                    errors.email = 
                    emailRegex.test(value)
                 ? ''
                 :"Invalid Email Address";
             break;
            case 'mobileNo':
                errors.mobileNo=mobileRegex.test(value)
                ? ''
                : 'Invalid Mobile number!';
                break;
            case 'telephoneNo':
                errors.telephoneNo=telephoneRegex.test(value)
                ? ''
                : 'Invalid Telephone number!';
                break;
            case 'idNo':
                errors.idNo=idRegex.test(value)
                ? '':'ID Number invalid';
                break;
            default:
             break;
        }
        this.setState({errors ,item},()=>console.log(this.state));
        
      }
    //   validatePhoneNumber = (number) => {
    //     const isValidPhoneNumber = validator.isMobilePhone(number)
    //     return (isValidPhoneNumber)
    //    }
       
    async handleSubmit(event) {
        event.preventDefault();
         const {item} = this.state;
        await fetch('/applicant/add', {
            method:'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item),
        });
        
        this.props.history.push('/groups');
      }
    
      

    render() {
        const {errors} = this.state
        const {item} = this.state
        return (
            <div className="content">
             
                <div className="container">
                    <div className="raw">
                        <div className="col mt-5 mx-auto h-100">
                            <h2 align="center">Customer Registration Form</h2>
                            <div className="form-area">
                                <h3 align="center">Consumer Detail</h3>

                                <form onSubmit={this.handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">

                                            {/* <div className="form-group row">
                                                <label className="col-sm-4 col-form-label"> Cost Center No:</label>
                                                <div class="col-sm-6">
                                                    <input type="text" className="form-control" id="cost_center_no" value={this.state.cost_center_no} onChange={this.handleChange} />
                                                </div>
                                            </div> */}
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Personal/Corporate:</label>
                                                <div className="col-sm-6">
                                                    <select value={item.personalCorporate} name="personalCorporate" className="form-control" onChange={this.handleChange}>
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
                                                        checked={item.idType==="NIC"}
                                                        onChange={this.handleChange} /> NIC
                                                    <input
                                                        className="checkbox checkbox-circle"
                                                        name="idType"
                                                        type="checkbox"
                                                        value="Passport"
                                                        checked={item.idType==="Passport"}
                                                        onChange={this.handleChange} /> Passport
                                                    <input
                                                        value="BUS REG NO"
                                                        type="checkbox"
                                                        name="idType"
                                                        checked={item.idType==="BUS REG NO"}
                                                        onChange={this.handleChange} /> BUS REG NO
                                                    </div> 
                                            </div>
                                            <div className="form-group row"> 
                                                <label className="col-sm-4 col-form-label">ID No:</label>  
                                                <div className="col-sm-6">                                            
                                                <input type="text" value={item.idNo} name="idNo" className="form-control" onChange={this.handleChange} minLength={10} maxLength={12} />                                             
                                                </div>
                                                {/* <button type="button" class="btn btn-outline-light">
                                                <span className="glyphicon glyphicon-search"></span> Search
                                                </button> */}
                                                {errors.idNo.length>0 && (
                                    <span className="errorMessage" style={{color:'red'}}>{errors.idNo}</span> 
                                )}
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Full Name:</label> 
                                                <div className="col-sm-6">                                                   
                                                <input type="text"  name="fullName" className="form-control" value={item.fullName} onChange={this.handleChange} />  
                                                </div>                                           
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">First Name(Initials):</label> 
                                                <div className="col-sm-6">                             
                                                <input type="text" name="firstName" className="form-control" value={item.firstName} onChange={this.handleChange} maxLength={15} />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label"> Last Name:</label> 
                                                <div className="col-sm-6">                                               
                                                <input type="text" name="lastName" className="form-control" value={item.lastName} onChange={this.handleChange}  maxLength={16}/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label"> CEB Employee </label>
                                                    <div className="col-sm-6"> 
                                                        <input
                                                            name="cebEmployee"
                                                            type="checkbox"
                                                            value="Yes"
                                                            checked={item.cebEmployee==="Yes"}
                                                            onChange={this.handleChange} /> Yes
                                                        <input
                                                                name="cebEmployee"
                                                                type="checkbox"
                                                                value="No"
                                                                checked={item.cebEmployee==="No"}
                                                                onChange={this.handleChange} /> No
                                                    </div>
                                            </div>
                                            
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Email:</label> 
                                                <div className="col-sm-6">                                                
                                                <input type="email"  name="email" value={item.email} className="form-control" onChange={this.handleChange} validator="isEmail" required />
                                                </div>
                                            </div>
                                        </div>  
                                        <div className="col-md-6"> 
                                            <label > Street Address:</label> 
                                             <div className="form-group row">
                                                <label className="col-sm-4 col-form-label"> Line 1 : </label> 
                                                <div className="col-sm-6"> 
                                                <input type="text" name="streetAddress" value={item.streetAddress} className="form-control" onChange={this.handleChange} maxLength={30}/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label"> Suburb(Line 2)</label> 
                                                <div className="col-sm-6"> 
                                                <input type="text" name="suburb" value={item.suburb} className="form-control" onChange={this.handleChange} maxLength={25} />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label"> City(Line 3) </label> 
                                                <div className="col-sm-6"> 
                                                <input type="text" name="city" value={item.city} className="form-control" onChange={this.handleChange} maxLength={20} />
                                                </div>                                           
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Postal Code:</label>
                                                <div className="col-sm-6">                                                    
                                                <input type="number"  name="postalCode" value={item.postalCode} className="form-control" onChange={this.handleChange}/>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Telephone No:</label>
                                                <div className="col-sm-6">    
                                                <input type="text"  name="telephoneNo" value={item.telephoneNo} className="form-control" onChange={this.handleChange} />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-sm-4 col-form-label">Mobile No/ SMS No:</label>
                                                <div className="col-sm-6"> 
                                                <NumberFormat format="0## ### ####" mask="_"  name="mobileNo" value={item.mobileNo} className="form-control " onChange={this.handleChange} required/>  
                                                {/* <input type="text" value={this.state.mobileNo} name="mobileNo" className="form-control " onChange={this.handleChange} required /> */}
                                                {errors.mobileNo.length>0 && (
                                    <span className="errorMessage" style={{color:'red'}}>{errors.mobileNo}</span>
                                )}
                                
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label lassName="col-sm-4 col-form-label"> Prefered Language</label>
                                                <div className="col-sm-6"> 
                                                    <input
                                                        name="preferredLanguage"
                                                        type="checkbox"
                                                        value="Sinhala"
                                                        checked={item.preferredLanguage==="Sinhala"}
                                                        onChange={this.handleChange} /> Sinhala
                                                    <input
                                                        name="preferredLanguage"
                                                        value="English"
                                                        type="checkbox"
                                                        checked={item.preferredLanguage==="English"}
                                                        onChange={this.handleChange} /> English
                                                </div>
                                            </div>
                                        </div>
                                            <div align="center">
                                            <button type="submit" className="btn btn-outline-light">Save</button>
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
        )
    }
}

export default Applicant;