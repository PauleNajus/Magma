import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import UILink from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { withStyles, useTheme } from "@material-ui/core/styles";

import Header from "./Components/Header";
import Underheader from "./Components/Underheader";
import Matches from "./Components/Matches";

import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin"

import './App.css';
import Teams from "./Pages/Teams";
import Tournaments from "./Pages/Tournaments";
import Bets from "./Pages/Bets"


const styles = theme => ({
  footer:{
    backgroundColor: "#1c202b",
    padding: "25px 0px",
    marginTop: "50px",
  }
});


function Copyright() {
  return (
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <UILink color="inherit" href="https://material-ui.com/">
          Magma team
        </UILink>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
  );
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render(){
    const { classes } = this.props;
    return (
        <React.Fragment>
          <Header></Header>
          <Underheader></Underheader>
          <Matches></Matches>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/signin">Signin</Link>
                            </li>
                            <li>
                                <Link to="/signup">Signup</Link>
                            </li>
                            <li>
                                <Link to="/teams">Teams</Link>
                            </li>
                            <li>
                                <Link to="/bets">Bets</Link>
                            </li>
                            <li>
                                <Link to="/tournaments">Tournaments</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/signin">
                            <Signin />
                        </Route>
                        <Route path="/signup">
                            <Signup />
                        </Route>
                        <Route path="/teams">
                            <Teams/>
                        </Route>
                        <Route path="/bets">
                            <Bets/>
                        </Route>
                        <Route path="/tournaments">
                            <Tournaments/>
                        </Route>
                    </Switch>
                </div>
            </Router>
          {/* Footer */}
          <footer className={classes.footer}>
            <Container maxWidth="sm">
              <Typography variant="body1">Esports competition games web-service.</Typography>
              <Copyright />
            </Container>
          </footer>
        </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);
