import * as React from "react";
import './TopNav.scss';
// import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import PhotoCamera from '@material-ui/icons/PhotoCamera';

interface Props { }

let win : any;
// const styles = {
//   width: 60,
//   height: 60,
// };
export default class TopNav extends React.Component<Props> {
  pushData = () => {
    win = window;
    console.log('wowowo', win.db);
  }

  render() {
    return (
      <div className="left-top-nav">
        {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={styles} /> */}
        <div>
          <Button variant="contained" color="primary" onClick={this.pushData}>
            Hello World
          </Button>
          {/* <IconButton className={classes.button} aria-label="Delete" disabled color="primary">
            <DeleteIcon />
          </IconButton>
          <IconButton color="secondary" className={classes.button} aria-label="Add an alarm">
            <Icon>alarm</Icon>
          </IconButton>
          <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
            <AddShoppingCartIcon />
          </IconButton> */}
        </div>
      </div>
    );
  }
}
