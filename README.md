## About

This is a template project for ReactJS frontend applications that use Material-UI components

The features built into this projects:

- [React](https://facebook.github.io/react/), with JSX and ES6 support ([babel](https://github.com/babel/babelify))
- react router
- [Material-UI](http://material-ui.com/)
- [Themes](http://www.material-ui.com/#/customization/themes) support
- [Flux](https://facebook.github.io/react/docs/flux-overview.html)
- Stores
- REST proxy layer
- sample pages
   - navigation header
   - footer
   - info page (cards)
   - list with items
   - form
- static code analizer: [jshint](http://jshint.com/), [eslint](http://eslint.org)
- build and QA commands directly with npm:
    eslint, lint, watch, [browserify](http://browserify.org/), build, test


## Usage

A real project instance can be generated via the
[kickoff](https://github.com/tombenke/kickoff) utility with the following command:

    $ kickoff -s tombenke/react-ui-material-archtype -d new_project

For further details on how to use the kickoff tool visit the [kickof documentation pages](http://tombenke.github.io/kickoff/docs/documentation.html).

After the new project has been successfully created, move into the folder, and install the dependencies with the following command:

Run the install command:

    $ cd new_project
    $ npm install


## Build the app

To create the dist package, run either:

    npm run browserify

or

    npm run watch

The results will appear under the `dist` folder.
You can start using it by opening the `dist/index.html` page with a browser, or start a http server (such as [http-server](https://www.npmjs.com/package/http-server)) which serves the `dist` folder as static resources.

## Static code analysis

For linter you need to install `eslint` and `babel-eslint`

    sudo npm install -g eslint
    sudo npm install -g babel-eslint

Also need to set properly the `.eslintrc` file

    {
        "parser": "babel-eslint",
        "env": {
            "browser": true,
            "node": true,
            "es6": true
        },
        "ecmaFeatures": {
            "modules": true
        },
        "rules": {
        }
    }

## Planned features and modifications

- tests
    - component (unit) tests
    - integration test

-  Localstore adapter for stores

- form validation
    - https://github.com/mbrookes/formsy-material-ui
    - https://github.com/christianalfoni/formsy-react
    - https://www.npmjs.com/package/validator

- event driven action pipeline
    - Actions (Events) with persistent event store (FIFO)
    - synchronizer module
    - state-machine and sync alert
        on-line
        off-line
    - event transfer channel
    - client-side dispatcher

- sass/css styling, customization

- Cordova

## References

- [React](https://facebook.github.io/react/)
- [Flux](https://facebook.github.io/react/docs/flux-overview.html)

- [Material-UI](http://material-ui.com/)
- [Themes](http://www.material-ui.com/#/customization/themes)

- [babelify](https://github.com/babel/babelify)
- [browserify](http://browserify.org/)

- [jshint](http://jshint.com/)
- [ESLint - The pluggable linting utility for JavaScript and JSX](http://eslint.org)
- [mocha-eslint - run ESLint as mocha tests](https://www.npmjs.com/package/mocha-eslint)
