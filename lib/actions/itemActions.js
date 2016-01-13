var AppDispatcher = require('../appDispatcher');
var ActionTypes = require('../constants').ActionTypes;

// Define action methods
module.exports = {

    // Item related actions
    itemAdd: function(item) {
        AppDispatcher.handleViewAction({
            actionType: ActionTypes.ITEM_ADD,
            item: item
        });
    },

    itemAddReq: function(item) {
        AppDispatcher.handleViewAction({
            actionType: ActionTypes.ITEM_ADD_REQ,
            item: item
        });
    },

    itemAddDone: function(item) {
        AppDispatcher.handleViewAction({
            actionType: ActionTypes.ITEM_ADD_DONE,
            item: item
        });
    },

    itemRemove: function(itemId) {
        AppDispatcher.handleViewAction({
            actionType: ActionTypes.ITEM_REMOVE,
            itemId: itemId
        });
    },

    itemRemoveReq: function(itemId) {
        AppDispatcher.handleViewAction({
            actionType: ActionTypes.ITEM_REMOVE_REQ,
            itemId: itemId
        });
    },

    itemRemoveDone: function(itemId) {
        AppDispatcher.handleViewAction({
            actionType: ActionTypes.ITEM_REMOVE_DONE,
            itemId: itemId
        });
    },

    itemUpdate: function(item) {
        AppDispatcher.handleViewAction({
            actionType: ActionTypes.ITEM_UPDATE,
            item: item
        });
    },

    itemUpdateReq: function(item) {
        AppDispatcher.handleViewAction({
            actionType: ActionTypes.ITEM_UPDATE_REQ,
            item: item
        });
    },

    itemUpdateDone: function(item) {
        AppDispatcher.handleViewAction({
            actionType: ActionTypes.ITEM_UPDATE_DONE,
            item: item
        });
    }
};