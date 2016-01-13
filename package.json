{
  "name": "{{appname}}",
  "description": "{{app_description}}",
  "version": "{{version}}",
  "tags": [
    "web",
    "ui",
    "react",
    "material-ui"
  ],
  "author": {
    "name": "{{author_full_name}}",
    "email": "{{author_email}}"
  },
  "bugs": {
    "url": "https://github.com/{{author_github_account}}/{{appname}}/issues"
  },
  "license": {
    "type": "MIT",
    "url": "https://github.com/{{author_github_account}}/{{appname}}/blob/master/LICENSE"
  },
  "repository": {
    "type": "git",
    "url": "http://github.com/{{author_github_account}}/{{appname}}.git"
  },
  "bin": {},
  "main": "index.js",
  "dependencies": {
    "flux": "2.1.1",
    "history": "1.13.1",
    "material-ui": "0.14.1",
    "node-uuid": "1.4.7",
    "react": "0.14.3",
    "react-dom": "0.14.3",
    "react-router": "1.0.2",
    "react-tap-event-plugin": "0.2.1",
    "underscore": "1.8.3",
    "watchify": "3.6.1"
  },
  "devDependencies": {
    "babel-preset-es2015": "6.3.13",
    "babel-preset-react": "6.3.13",
    "babelify": "7.2.0",
    "browserify": "12.0.1",
    "mocha-eslint": "1.0.0",
    "reactify": "1.1.1",
    "uglify-js": "2.6.1"
  },
  "browserify": {
    "transform": [
      [
        "babelify",
        {
          "presets": [
            "es2015",
            "react"
          ]
        }
      ]
    ]
  },
  "scripts": {
    "eslint": "eslint lib/*/*.js",
    "lint": "jshint **.js",
    "watch": "watchify lib/app.js -o dist/js/bundle.js -v",
    "browserify": "browserify lib/app.js | uglifyjs > dist/js/bundle.js",
    "build": "npm run browserify;"
  }
}
