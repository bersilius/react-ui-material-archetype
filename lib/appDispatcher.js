var PayloadSources = require('./constants').PayloadSources;
var Dispatcher = require('flux').Dispatcher;

// Create dispatcher instance
var AppDispatcher = new Dispatcher();

/**
* @param {object} action    The details of the action, including the action's
*                           type and additional data coming from the view.
*/
AppDispatcher.handleViewAction = function(action) {
    this.dispatch({
        source: PayloadSources.VIEW_ACTION,
        action: action
    });
};

/**
* @param {object} action    The details of the action, including the action's
*                           type and additional data coming from the server.
*/
AppDispatcher.handleServerAction = function(action) {
    this.dispatch({
        source: PayloadSources.SERVER_ACTION,
        action: action
    });
};

module.exports = AppDispatcher;