import React from "react";

import Grid from '@material-ui/core/Grid';

class Imagebar extends React.Component {
  render() {
    return (
        <Grid container>
            <Grid item xs = "4">
            <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" className="img-fluid" alt="" />
            </Grid>
        </Grid>
    );
  }
}

export default Imagebar;