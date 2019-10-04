import React from "react";

import AppBar from '../Common/AppBar';
//import Imagebar from './Imagebar';
import Breadcrumbs from './Breadcrumbs';
import Content from './Content';


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
              <Content></Content>
            </div>
        </div>
    );
  }
}

export default Dashboard;