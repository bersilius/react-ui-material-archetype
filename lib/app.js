import React from 'react';
import { render } from 'react-dom';
import { createHistory, useBasename } from 'history';
import { Router, Route, Link, IndexRoute } from 'react-router';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo: https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const history = useBasename(createHistory)({
    basename: '/'
});

const rootRoute = [{
    path: '/',
    component: require('./components/main'),
    indexRoute: { component: require('./components/intro') },
    childRoutes: [
        { path: '/intro', component: require('./components/intro') },
        { path: '/items', component: require('./components/itemList') },
        { path: '/itemAdd',  component: require('./components/itemAdd') },
        // { path: 'items/:itemId', component: require('./components/notImplemented') },
        { path: '/itemRemove/:itemId', component: require('./components/itemRemove') },
        { path: '/itemEdit/:itemId', component: require('./components/itemEdit') },
        { path: '/help', component: require('./components/help') }
    ]
}];

render(
    <Router history={history} routes={rootRoute} />,
    document.getElementById('app')
);
