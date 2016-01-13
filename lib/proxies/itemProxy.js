var itemActions = require('../actions/itemActions');
var ActionTypes = require('../constants.js').ActionTypes;
var AppDispatcher = require('../appDispatcher');
var request = require('superagent');
var config = require('../../config.json');
var baseUrl = "http://localhost:" + config.port + config.urlPrefix;

// Register callback with AppDispatcher
AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {

        // Item related callbacks
        case ActionTypes.ITEM_ADD_REQ:
            console.log('itemProxy.itemAdd.request');
            request
                .put(baseUrl + '/items/' + action.item.id)
                .auth(config.loginCredentials.user, config.loginCredentials.user)
                .send(action.item)
                .set('Accept', 'application/json')
                .end(function(err, res) {
                    if (err) {
                        // Something went wrong
                    } else {
                        console.log('AppProxy.itemAdd.response', res);
                        itemActions.itemAddDone(action.item);
                    }
                });
            break;

        case ActionTypes.ITEM_UPDATE_REQ:
            console.log('itemProxy.itemUpdate.request');
            request
                .put(baseUrl + '/items/' + action.item.id)
                .auth(config.loginCredentials.user, config.loginCredentials.user)
                .send(action.item)
                .set('Accept', 'application/json')
                .end(function(err, res) {
                    if (err) {
                        // Something went wrong
                    } else {
                        console.log('AppProxy.itemUpdate.response', res);
                        itemActions.itemUpdateDone(action.item);
                    }
                });
            break;

        case ActionTypes.ITEM_REMOVE_REQ:
            console.log('itemProxy.itemRemove.request');
            request
                .del(baseUrl + '/items/' + action.itemId)
                .auth(config.loginCredentials.user, config.loginCredentials.user)
                .send({})
                .set('Accept', 'application/json')
                .end(function(err, res) {
                    if (err) {
                        // Something went wrong
                    } else {
                        console.log('itemProxy.itemRemove.response', res);
                        itemActions.itemRemoveDone(action.itemId);
                    }
                });
            break;

        default:
            return true;
    }

    return true;
});