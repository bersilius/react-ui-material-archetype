import React from 'react';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import AppTheme from '../themes/appTheme';

var Main = React.createClass( {

    // the key passed through context must be called "muiTheme"
    childContextTypes : {
        muiTheme: React.PropTypes.object
    },

    getChildContext : function() {
        return {
            muiTheme: ThemeManager.getMuiTheme(AppTheme),
        };
    },

    render: function() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;