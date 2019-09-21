import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon ,MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem} from 'mdbreact';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    return (
      <MDBContainer>
        <form onSubmit={this.success}>
          <MDBRow>
            <h4>Student Register</h4>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4">
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Student Name
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="name"
                onChange={this.updateInput}
                value={this.state.name}
              />
            </MDBCol>
            <MDBCol md="3">
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Register Number
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="regnum"
                onChange={this.updateInput}
                value={this.state.regnum}
              />
            </MDBCol>
            <MDBCol md="3">
              <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Index Number
              </label>
              <input
                type="text"
                id="defaultFormCardNameEx"
                className="form-control"
                name="index"
                onChange={this.updateInput}
                value={this.state.index}
              />
            </MDBCol>
          </MDBRow>
          <br></br>
          <MDBRow>
            <MDBCol md="5">
            <label
                htmlFor="defaultFormCardNameEx"
                className="grey-text font-weight-light"
              >
                Email
              </label>
              <input
                type="email"
                id="defaultFormCardNameEx"
                className="form-control"
                name="email"
                onChange={this.updateInput}
                value={this.state.email}
              />
            </MDBCol>
          </MDBRow>
          <div className="text-center py-4 mt-3">
            {/* {this.renderRedirect()} */}
            <MDBBtn className="btn btn-outline-purple" type="submit" 
              // onClick={this.setRedirect}
              >
              Register
            <MDBIcon far icon="paper-plane" className="ml-2" />
            </MDBBtn>
          </div>
        </form>
      </MDBContainer>
    );
  }
}

export default Student;