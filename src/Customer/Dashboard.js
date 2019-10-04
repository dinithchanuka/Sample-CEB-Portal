import React from "react";

import AppBar from '../Common/AppBar';
import Breadcrumbs from './Breadcrumbs';
//import Content from './Content';
import Form from "./Form";
import Formone from "./Formone";
import Formx from './Formx'


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    return (
        <div>
            <div>
              <AppBar></AppBar>
            </div>
            <div>
              
            </div>
            <div>
              <Breadcrumbs></Breadcrumbs>
            </div>
            <div>
              <Form></Form>
            </div>
        </div>
    );
  }
}

export default Dashboard;