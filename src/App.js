import React, { Component } from 'react';
import MyOwnButton from './components/MyOwnButton';
import './App.css';
import { AppBar, Typography, Toolbar, Paper, List, ListItem, ListItemText, TextField } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  root: {
    flexGrow: 1,
    alignItems: 'justify',
    justifyContent: 'space-between',
    width: 1000,
  },

});

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      state: {
        name: 'Ved',
        number: 9876543210,
        message: 'This is the message I need to send'
      }

    }
  }

  handleChangeName = (event) => {
    this.setState({ name: event.target.value })
  }
  handleChangeNumber = (event) => {
    this.setState({ number: event.target.value })
  }
  handleChangeMessage = (event) => {
    this.setState({ message: event.target.value })
  }
  Send = () => {
    alert(this.state.name + "\n" + this.state.number + "\n" + this.state.message)
  }
  Home = () => {
    alert("I must go to Home Page");
  }
  About = () => {
    alert("I must go to About my Page");
  }
  Contact = () => {
    alert("I must go to Contact Page");
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="App">
        <AppBar color="primary" position="static" xs={12} md={12}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              Hi this is my own React Application with Material UI
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper className={classes.root}>

        </Paper>
        <List component="nav">
          <ListItem component="div" >
            <ListItemText inset>
              <MyOwnButton ButtonName="Home" onClick={this.Home} />
            </ListItemText>
            <ListItemText inset>
              <MyOwnButton ButtonName="About" onClick={this.About} />
            </ListItemText>
            <ListItemText inset>
              <MyOwnButton ButtonName="Contact" onClick={this.Contact} />
            </ListItemText>
          </ListItem>
        </List>
        <form style={{ margin: 'auto', padding: 20, width: 600 }}>
          <h1>Contact Form</h1>
          <TextField
            fullWidth id="name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChangeName}
            margin="normal"
            variant="outlined" />
          <br />
          <TextField
            fullWidth id="number"
            label="Contact Number"
            value={this.state.number}
            onChange={this.handleChangeNumber}
            margin="normal"
            variant="outlined" />
          <br />
          <TextField
            fullWidth id="message"
            label="Message"
            value={this.state.message}
            onChange={this.handleChangeMessage}
            margin="normal"
            variant="outlined" />
          <br />
          <MyOwnButton
            ButtonName="Send"
            onClick={this.Send}
          />
        </form>
      </div>

    )
  }
}
export default withStyles(styles)(App);