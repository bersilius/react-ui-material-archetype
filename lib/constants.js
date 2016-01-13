var keyMirror = require('react/node_modules/fbjs/lib/keyMirror');

module.exports = {

    ActionTypes: keyMirror({

        // Application
        START_APPLICATION: null,

        // Item
        ITEM_ADD: null,
        ITEM_ADD_REQ: null,
        ITEM_ADD_DONE: null,

        ITEM_UPDATE: null,
        ITEM_UPDATE_REQ: null,
        ITEM_UPDATE_DONE: null,

        ITEM_REMOVE: null,
        ITEM_REMOVE_REQ: null,
        ITEM_REMOVE_DONE: null
   }),

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })
};
