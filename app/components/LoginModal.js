import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <RaisedButton label="Login" onTouchTap={this.handleOpen} />
        <Dialog
          title="Login to RightScale"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={1} label="us-3.rightscale.com" primaryText="US-East"/>
            <MenuItem value={2} label="us-4.rightscale.com" primaryText="US-West"/>
          </DropDownMenu><br/>
          <TextField
            floatingLabelText="API REFRESH TOKEN"
            type="password"
          /><br/>
        </Dialog>
      </div>
    );
  }
}
