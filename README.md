# gatsby-plugin-metakronisms-content

A plugin to handle structured content for the METAKRONISMS project.

## Installation

```sh
npm i https://github.com/METAKRONISMS/gatsby-plugin-metakronisms-content.git#main
```

## Usage

Add entries in the `plugins` of your `gatsby-config.js` similar to:

```js
module.exports = {
  // ...
  plugins: [
    //...
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'episodes',
        path: `${__dirname}/src/episodes`,
      },
    },
    //...
    {
      resolve: 'gatsby-plugin-metakronisms-content',
      options: {
        name: 'episodes',
        path: `${__dirname}/src/episodes`,
      },
    },
    // ...
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        // ...
      },
    },
    // ...
  ],
};
```
