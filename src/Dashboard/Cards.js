import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import { height } from '@material-ui/system';

const CardExample = () => {
  return (
    <MDBCol>
      <MDBCard style={{ width: "22rem", height:"5rem"}}>
        <MDBCardImage className="img-fluid" src="https://scrummyloyalty.com/wp-content/uploads/2017/06/Loyal-Customers.jpg" waves />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the card title and make
            up the bulk of the card&apos;s content.
          </MDBCardText>
          <MDBBtn href="#">MDBBtn</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default CardExample;