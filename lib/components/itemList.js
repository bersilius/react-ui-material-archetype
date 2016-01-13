import React from 'react';
import Card from 'material-ui/lib/card/card';
import Header from './header';
import Footer from './footer';
import List from 'material-ui/lib/lists/list';
import ItemListItem from './itemListItem';
var AppStore = require('../stores/itemStore');
var _ = require('underscore');
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';
import Colors from 'material-ui/lib/styles/colors';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import Divider from 'material-ui/lib/divider';
var getState = function() {
    return {
        items: AppStore.getItems()
    };
};

class ItemList extends React.Component {

    constructor(props) {
        super(props);
        this.state = getState();
        var component = this;
        this._onChange = function() {
            component.setState(getState());

        };
    }

    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    }

    render() {
        const iconStyles = {
            marginRight: 24,
        };
        var component = this;
        var items = this.state.items;

        var onAdd = function() {
            component.props.history.pushState(null, "/itemAdd");
        };

        return (
            <Card>
                <Header brand="Items" history={component.props.history} navItems={[
                        {to: "/", label: "< Main"}
                    ]} />

                    <List>
                            {
                            _.map(items, function(item) {
                                return (<ItemListItem key={item.id}
                                                      itemId={item.id}
                                                      name={item.name}
                                                      numItems={item.numItems}
                                                      history={component.props.history} />);
                            })
                        }
                    </List>

                    <Divider />

                    <FlatButton linkButton={true} onTouchTap={onAdd} secondary={true} label="New Item" labelPosition="after">
                        <ContentAdd />
                    </FlatButton>

                    <Divider />
                    
                    <Footer />
            </Card>
        );
    }
};

module.exports = ItemList;