# Splice Style template

This is a template repository to get you started building styles for [https://getsplice.io](Splice) or many other generative art projects. Here's the [ official documentation](https://splicenft.github.io/splicenft/artists/).

Want to create a new Splice style? Great! Use this template repo as a starting point. The only code you need to touch is inside the `splice.js` file. It's not relying on any external dependencies, build or packaging tools on purpose.

To get started, create a new git repository in your own namespace.

All your code must go into the `splice.js` file. Everything else is out of your scope and control.

### Using different parameters

The origin NFT parameters (mainly colors & randomness at the moment) are defined inline in `index.html`. Checkout https://getsplice.io/#/create to retrieve this information for other NFTs.

### Starting a local development server

Might be helpful but usually unnecessary (needs node / npm):

```
npx serve -s .
```

### Code style

While code styling doesn't matter too much for code that's unchangeably deployed on a decentralized network, it sure might matter to you when developing. Enable [Prettier](https://prettier.io/) on your VSCode or whatever IDE you're using, we've put a really basic `.prettierrc` in the repo's root.
