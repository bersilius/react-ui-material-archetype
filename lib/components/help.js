import React from 'react';
import Card from 'material-ui/lib/card/card';
import Header from './header';

class Help extends React.Component {
    render() {
        var component = this;
        return (
            <Card>
                <Header brand="Help" history={component.props.history} navItems={[
                        {to: "/", label: "< Main"},
                    ]} />

                <main role="main" className="container">
                    <h1>Help</h1>
                    <p>TODO: Write the context-sensitive help text.</p>
                </main>
            </Card>
        );
    }
};

module.exports = Help;