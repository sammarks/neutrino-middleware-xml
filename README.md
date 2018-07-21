![][header-image]

[![CircleCI][circleci-image]][circleci-url]
[![NPM version][npm-version]][npm-url]
[![NPM downloads][npm-downloads]][npm-url]
![License][license]
![Issues][issues]

`neutrino-middleware-xml` is a Neutrino Middleware for the [Webpack XML Template Plugin.][webpack-link]

## Get Started

```sh
npm install --save-dev neutrino-middleware-xml
```

```js
module.exports = {
  use: [
    'neutrino-middleware-xml',
    {
      files: [
        {
          template: path.join(__dirname, 'xml-template.ejs'),
          filename: 'path/to/result.xml',
          data: {
            foo: 'bar'
          }
        }
      ]
    }
  ]
}
```

## Features

- Uses the [Webpack XML Template Plugin][webpack-link] to generate XML files based on a template and passed data.
- Options passed to this middleware are passed directly to the plugin. 
    See [the plugin's documentation][webpack-link] for more details.

[header-image]: https://raw.githubusercontent.com/sammarks/art/master/neutrino-middleware-xml/header.jpg
[circleci-image]: https://img.shields.io/circleci/project/github/sammarks/neutrino-middleware-xml.svg
[circleci-url]: https://circleci.com/gh/sammarks/neutrino-middleware-xml/tree/master
[npm-version]: https://img.shields.io/npm/v/neutrino-middleware-xml.svg
[npm-downloads]: https://img.shields.io/npm/dm/neutrino-middleware-xml.svg
[npm-url]: https://www.npmjs.com/package/neutrino-middleware-xml
[license]: https://img.shields.io/github/license/sammarks/neutrino-middleware-xml.svg
[issues]: https://img.shields.io/github/issues/sammarks/neutrino-middleware-xml.svg

[webpack-link]: https://github.com/rvanmil/xml-webpack-plugin
