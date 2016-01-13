import React from 'react';

import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import FlatButton from 'material-ui/lib/flat-button';

import IconMenu from 'material-ui/lib/menus/icon-menu';
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/lib/menus/menu-item';

function handleTouchTap() {
  alert('onTouchTap triggered on the title component');
}

function nav(history, href) {
    console.log('nav called with ', href);
    return function(target) {
        console.log('onItemTouchTap');
        history.pushState(null, href);
    };
}

const styles = {
    title: {
        cursor: 'pointer',
    },
};

class Header extends React.Component {
    render() {
      var component =  this;
      console.log('Header: ', this.props);
        return (
            <AppBar
                title={<span style={styles.title} onTouchTap={handleTouchTap}>{this.props.brand}</span>}
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                iconElementRight={
                  <IconMenu
                    iconButtonElement={
                      <IconButton><MoreVertIcon /></IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  >
                          {this.props.navItems.map(function(navItem, index) {
                              return (
                                <MenuItem key={index} onTouchTap={nav(component.props.history, navItem.to)} primaryText={navItem.label} />
                                );
                          })}
                  </IconMenu>
                }
            />
        );
    }
}


module.exports = Header;