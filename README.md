## About

'This is a template project for ReactJS frontend applications that use Material-UI components'

The features built into this projects:

- ReactJS, with ES6 transpiler
- react router
- [Material-UI](http://material-ui.com/)
- stores with local store handling
- REST proxy layer
- sample pages
   - navigation header
   - footer
   - info page (cards)
   - list with items
   - form
- static code analizer: jshint, eslint
- build and QA commands directly with npm:
    eslint, lint, watch, browserify, build, test


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

## What is in the project template


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


## References
[http://www.material-ui.com/](http://www.material-ui.com/)

[ESLint - The pluggable linting utility for JavaScript and JSX](http://eslint.org)
[mocha-eslint - run ESLint as mocha tests](https://www.npmjs.com/package/mocha-eslint)
