import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import About from './About';


const styles = {
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },

  title: {
    margin: 'auto',
    width: '50%'

  },
};


/**
 * Header of our page! 
 */
class DenseAppBar extends Component {

  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });

    console.log(this.state);
    console.log(side);
    console.log(open);
  };

  constructor(props) {
    super(props);
    console.log(props);

  }
  render() {


    return (
        <div>
          <AppBar position="static" color="red">
          <Toolbar>
              <IconButton  onClick={this.toggleDrawer('left',true)}   color="inherit" aria-label="Menu">
                <MenuIcon/>
              </IconButton>
              <Typography variant="h4" color="inherit" aria-label="title"   style={styles.title}>Lost Coding</Typography>

          </Toolbar>
          </AppBar>
          <Drawer open={this.state.left} onClose={this.toggleDrawer('left',false)}>
            <List>
            <Link to="/">
              <ListItem  onChange={this.toggleDrawer('left',false)} onClick={this.toggleDrawer('left',false)}>
                  <ListItemIcon><HomeIcon/></ListItemIcon>
                  <ListItemText  primary="Home" />
                </ListItem>
              </Link>
            <Link to="/about/">
              <ListItem  onChange={this.toggleDrawer('left',false)} onClick={this.toggleDrawer('left',false)}>
                <ListItemIcon><MailIcon/></ListItemIcon>
                <ListItemText  primary="About" />
              </ListItem>
              </Link>
            </List>
          </Drawer>
        </div>
    );
  }
}

export default DenseAppBar;