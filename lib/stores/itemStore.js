var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');
var AppDispatcher = require('../appDispatcher');
var ActionTypes = require('../constants.js').ActionTypes;
var itemActions = require('../actions/itemActions');
var config = require('../../config.json');

// Define initial data points
var _items = [
    {
        id: '2ad48a17-9ffd-4fbf-a4b2-68d72669833d',
        name: 'Office'
    },
    {
        id: '2dcfc661-4eae-4e24-b1d0-350cb367bce6',
        name: 'Private'
    }
];

// Extend Store with EventEmitter to add eventing capabilities
var ItemStore = _.extend({}, EventEmitter.prototype, {

    // Items
    getItems: function() {
        return _.map(_items, function(item) {
            return {
                id: item.id,
                name: item.name,
                numItems: 0
            };
        });
    },

    getItemById: function(itemId) {
        return _.find(_items, function(item) { if (item.id === itemId) return item; });
    },

    removeItemById: function(itemId) {

        // Remove the Item with itemId
        _items = _.filter(_items, function(item) { if (item.id !== itemId) return true; });

        ItemStore.emitChange();
    },

    updateItemById: function(item) {
        ItemStore.getItemById(item.id).name = item.name;
        ItemStore.emitChange();
    },

    addItemWithId: function(item) {
        _items.push({
            id: item.id,
            name: item.name
        });
        ItemStore.emitChange();
    },

    // Emit Change event
    emitChange: function() {
        this.emit('change');
    },

    // Add change listener
    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    // Remove change listener
    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }
});

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {

        // Item related callbacks
        case ActionTypes.ITEM_ADD:
            setTimeout(function() {
                console.log("ITEM_ADD", action.item);
                if (config.useServer) {
                    itemActions.itemAddReq(action.item);
                } else {
                    itemActions.itemAddDone(action.item);
                }
            }, 0);
            break;

        case ActionTypes.ITEM_ADD_DONE:
            setTimeout(function() {
                ItemStore.addItemWithId(action.item);
            }, 0);
            break;

        case ActionTypes.ITEM_UPDATE:
            setTimeout(function() {
                if (config.useServer) {
                    itemActions.itemUpdateReq(action.item);
                } else {
                    itemActions.itemUpdateDone(action.item);
                }
            }, 0);
            break;

        case ActionTypes.ITEM_UPDATE_DONE:
            setTimeout(function() {
                ItemStore.updateItemById(action.item);
            }, 0);
            break;

        case ActionTypes.ITEM_REMOVE:
            setTimeout(function() {
                if (config.useServer) {
                    itemActions.itemRemoveReq(action.itemId);
                } else {
                    itemActions.itemRemoveDone(action.itemId);
                }
            }, 0);
            break;

        case ActionTypes.ITEM_REMOVE_DONE:
            setTimeout(function() {
                ItemStore.removeItemById(action.itemId);
            }, 0);
            break;

        default:
            return true;
    }

    return true;
});

module.exports = ItemStore;