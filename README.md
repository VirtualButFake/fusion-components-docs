<div align="center">

# Fusion Components Documentation

The documentation for [Fusion Components](https://github.com/virtualbutfake/fusion-components).

[![License](https://img.shields.io/github/license/virtualbutfake/fusion-components-docs)](https://github.com/virtualbutfake/fusion-components-docs/blob/master/LICENSE.md)

</div>

## Building

To build the documentation, you need to have [Node.js](https://nodejs.org) installed. After installing Node.js, run the following commands:

```bash
npm install
npm run docs:dev
```

This will start a development server that can be used to preview the documentation.

## Contributing

Contributions are always welcomed. To contribute, fork this repository, make your changes, and create a pull request.
Make sure to stick to the conventions used in the existing documentation.

The documentation automatically updates when changes are made to the repository. Please do not modify the `version.json` file, as it is used to determine the version of the documentation.
To add to this, a branch should only be made on this repository when a new version of Fusion Components is released and the old one should persist. This is to ensure that backwards compatibility is maintained.
The `main` branch is always assumed to be the latest version of Fusion Components.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/virtualbutfake/fusion-components-docs/blob/main/LICENSE.md) file for details.