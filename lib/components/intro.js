import React from 'react';
import Avatar from 'material-ui/lib/avatar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardHeader from 'material-ui/lib/card/card-header';
import CardMedia from 'material-ui/lib/card/card-media';
import CardTitle from 'material-ui/lib/card/card-title';
import FlatButton from 'material-ui/lib/flat-button';
import CardText from 'material-ui/lib/card/card-text';

import Header from './header';

class Intro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        var component = this;

        this.onAction = function() {
            console.log('on Action');
            component.props.history.pushState(null, "/help");
        };
    }

    render() {
        var component = this;
        return (
            <Card>
                <Header brand="App Name" history={component.props.history} navItems={[
                        {to: "/items", label: "Items"},
                        {to: "/help", label: "Help"}
                    ]} />

{/*
                <CardHeader
                    title="Demo Application"
                    subtitle="This is a demo application"
                    avatar={<Avatar style={{color: 'red'}}>A</Avatar>}/>

                <CardHeader
                    title="Demo Url Based Avatar"
                    subtitle="Subtitle"
                    avatar="http://lorempixel.com/100/100/nature/"/>

                <CardTitle title="Title" subtitle="Subtitle"/>
*/}

                <CardMedia overlay={<CardTitle title="Title" subtitle="Subtitle"/>}>
                    <img src="http://lorempixel.com/600/337/nature/"/>
                </CardMedia>

                <CardActions>
                    <FlatButton onClick={this.onAction} label="Help"/>
{/*
                    <FlatButton label="Action2"/>
*/}
                </CardActions>

                <CardText>
                    <h1>Hello Material-UI</h1>
                    This application is a simple demonstration of using the Card component of material-ui with ReactJS.
                </CardText>
            </Card>
        );
    }
}

module.exports = Intro;