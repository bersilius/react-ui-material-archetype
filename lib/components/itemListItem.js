import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import ActionDelete from 'material-ui/lib/svg-icons/action/delete';
import ModeEdit from 'material-ui/lib/svg-icons/editor/mode-edit';

class ItemListItem extends React.Component {

    constructor(props) {
        super(props);
        var component = this;

        this.onEdit = function() {
            component.props.history.pushState(null, `/itemEdit/${component.props.itemId}`);
        };

        this.onRemove = function() {
            component.props.history.pushState(null, `/itemRemove/${component.props.itemId}`);
        };
    }

    render() {
        return (
            <ListItem 
                primaryText={this.props.name} 
                leftIcon={<ModeEdit onTouchTap={this.onEdit}/>}
                rightIcon={<ActionDelete onTouchTap={this.onRemove}/>} />
        );
    }
};

module.exports = ItemListItem;