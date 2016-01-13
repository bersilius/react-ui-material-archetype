import React from 'react';

import FlatButton from 'material-ui/lib/flat-button';
import AlertWarning from 'material-ui/lib/svg-icons/alert/warning';
import Card from 'material-ui/lib/card/card';

class ConfirmPanel extends React.Component {

    render() {
        return (
            <div>
                <Card><AlertWarning /><p>{this.props.text}</p></Card>
                <FlatButton linkButton={true} onTouchTap={this.props.onYes} secondary={true} label="Yes" />
                <FlatButton linkButton={true} onTouchTap={this.props.onNo} secondary={true} label="No" />
            </div>
        );
    }
};

module.exports = ConfirmPanel;