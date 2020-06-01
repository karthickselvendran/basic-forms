import React, { Component } from "react";
import Button from '@material-ui/core/Button';
class MyOwnButton extends Component {
    render() {
        return (
            <div>
                <Button variant="contained" style={{ backgroundColor: '#009688', color: 'white' }}
                    onClick={this.props.onClick}>
                    {this.props.ButtonName}
                </Button>
            </div>

        );
    }
}
export default MyOwnButton;