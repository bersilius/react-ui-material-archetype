import React from 'react';

import Header from './header';
import Footer from './footer';
import ConfirmPanel from './confirmPanel';
import AppActions from '../actions/itemActions';

class ItemRemove extends React.Component {

    render() {
        var itemId = this.props.params.itemId;
        var itemIdx = this.props.params.idx;
        var backUrl = "/items";
        var component = this;

        var onYes = function() {
            AppActions.itemRemove(itemId);
            component.props.history.pushState(null, "/items");
        };

        var onNo = function() {
            component.props.history.pushState(null, "/items");
        };

        return (
            <div>
                <Header brand="Remove Item" history={component.props.history} navItems={[
                        {to: backUrl, label: "< Items"},
                    ]} />

                <main role="main" className="container">
                    <ConfirmPanel text="Do you really want to remove the item with all the items inside it?"
                                  onYes={onYes}
                                  onNo={onNo} />
                </main>

                <Footer />
            </div>
        );
    }
};

module.exports = ItemRemove;