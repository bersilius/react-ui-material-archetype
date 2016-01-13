import React from 'react';
var config = require('../../config.json');

class Footer extends React.Component {
    render() {
        return (
            <footer role="contentinfo">
                <p><small>{config.brand}</small></p>
            </footer>
        );
    }
}

module.exports = Footer;