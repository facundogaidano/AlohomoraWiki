# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.
This website uses npm, you can use node.js version 18 onwards.
For Github pages deployment, follow Git Action deploy.yml

### Installation

```
$ npm
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


NOT USING THIS YET, DO NOT WORRY IN THE MEANTIME
### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
