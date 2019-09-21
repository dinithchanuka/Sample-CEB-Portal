import React from "react";

import AppBar from './AppBar';
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