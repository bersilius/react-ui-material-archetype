import React from 'react';

import Card from 'material-ui/lib/card/card';
import TextField from 'material-ui/lib/text-field';
import FlatButton from 'material-ui/lib/flat-button';

import Header from './header';
import Footer from './footer';
import ConfirmPanel from './confirmPanel';
import AppActions from '../actions/itemActions';
import AppStore from '../stores/itemStore';
import { handleChange } from '../mixins/form';
import uuid from 'node-uuid';

class ItemAdd extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: uuid.v1(),
            name: ''
        };
    }

    render() {
        var component = this;
        var item = component.state;
        var itemId = item.id;

        var backUrl = "/items";
        var component = this;

        var onSave = function() {
            AppActions.itemAdd(component.state);
            component.props.history.pushState(null, "/items");
        };

        var onCancel = function() {
            component.props.history.pushState(null, "/items");
        };

        return (

            <Card>
                <Header brand="Add New Item" history={component.props.history} navItems={[
                        {to: backUrl, label: "< Items"},
                    ]} />

                <main role="main" className="container">
                    <form>
                        <TextField
                               type="text"
                               label='name:'
                               hintText="The New Item"
                               value={this.state.name}
                               onChange={handleChange(this, 'name')} />

                            <FlatButton linkButton={true} onTouchTap={onCancel} secondary={true} label="Cancel" />
                            <FlatButton linkButton={true} onTouchTap={onSave} secondary={true} label="Save" />
                    </form>
                </main>

                <Footer />
            </Card>
        );
    }
};

module.exports = ItemAdd;