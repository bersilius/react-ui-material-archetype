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

var getState = function(itemId) {
    return AppStore.getItemById(itemId);
};

class ItemEdit extends React.Component {

    constructor(props) {
        super(props);
        this.state = getState(this.props.params.itemId);
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

    _onChange() {
        this.setState(getState(this.getParams().itemId));
    }

    render() {
        var component = this;
        var item = component.state;
        var itemId = item.id;

        var backUrl = "/items";

        var onSave = function() {
            AppActions.itemUpdate(component.state);
            component.props.history.pushState(null, "/items");
        };

        var onCancel = function() {
            component.props.history.pushState(null, "/items");
        };

        return (
            <div>
                <Header brand="Edit Item" history={component.props.history} navItems={[
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

            </div>
        );
    }
};

module.exports = ItemEdit;