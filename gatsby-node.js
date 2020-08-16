/* eslint-disable no-console */

const path = require('path');
const { existsSync } = require('fs');

const parseRelativePath = (relativePath) => {
  const parts = relativePath.split('/');
  const seasonNr = Number(parts[0]);
  const episodeNr = Number(parts[1]);
  return { seasonNr, episodeNr };
};

exports.onCreateNode = (options) => {
  const {
    node,
    node: { internal: { type } },
    getNode,
    createContentDigest,
    actions: {
      createNode,
      createNodeField,
    },
  } = options;
  if (type === 'File') {
    const { relativePath } = node;
    const { seasonNr, episodeNr } = parseRelativePath(relativePath);

    createNodeField({
      node,
      name: 'seasonNr',
      value: seasonNr,
    });

    createNodeField({
      node,
      name: 'episodeNr',
      value: episodeNr,
    });

    return;
  }

  if (type !== 'Mdx') return;
  const fileNode = getNode(node.parent);

  const { relativePath, base } = fileNode;
  const { seasonNr, episodeNr } = parseRelativePath(relativePath);

  createNodeField({
    node,
    name: 'seasonNr',
    value: seasonNr,
  });

  createNodeField({
    node,
    name: 'episodeNr',
    value: episodeNr,
  });

  switch (base) {
    case 'intro.md':
    case 'intro.mdx':
      createNodeField({
        node,
        name: 'mkType',
        value: 'intro',
      });

      createNode({
        id: `s${seasonNr}`,
        parent: fileNode.id,
        seasonNr,
        internal: {
          type: 'Season',
          contentDigest: createContentDigest({ seasonNr }),
        },
      });
      createNode({
        id: `s${seasonNr}e${episodeNr}`,
        parent: `s${seasonNr}`,
        seasonNr,
        episodeNr,
        children: [`s${seasonNr}e${episodeNr}#intro`],
        title: node.frontmatter.title,
        internal: {
          type: 'Episode',
          contentDigest: createContentDigest({ seasonNr, episodeNr }),
        },
      });
      break;

    case 'outro.md':
    case 'outro.mdx':
      createNodeField({
        node,
        name: 'mkType',
        value: 'outro',
      });
      break;

    default:
      // console.warn('Unhandled MK data', relativePath);
  }
};

// ////////////////////////////////////////////////////////////////////////

const defaultSeasonComponent = path.resolve('src/components/Season.jsx');
const createSeasonPage = (context) => {
  const seasonPath = `src/episodes/${context.seasonNr}`;
  let customComponent = path.resolve(`${seasonPath}/Season.jsx`);
  if (!existsSync(customComponent)) customComponent = false;

  console.info('Create page for season %s', context.seasonNr, customComponent);
  return {
    context: { ...context, pageType: 'season' },
    path: `episodes/s${context.seasonNr}/`,
    component: customComponent || defaultSeasonComponent,
  };
};

const defaultEpisodeComponent = path.resolve('src/components/Episode/Episode.jsx');
const createEpisodePage = (context) => {
  const episodePath = `src/episodes/${context.seasonNr}/${context.episodeNr}`;

  let customComponent = path.resolve(`${episodePath}/Episode.jsx`);
  if (!existsSync(customComponent)) customComponent = false;

  console.info('Create page for episode %s (season %s)', context.episodeNr, context.seasonNr, customComponent);
  return {
    context: { ...context, pageType: 'episode' },
    path: `episodes/s${context.seasonNr}/e${context.episodeNr}/`,
    component: customComponent || defaultEpisodeComponent,
  };
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query allEspisodes {
      allEpisode {
        seasons: group(field: seasonNr) {
          episodes: nodes {
            episodeNr
            title
          }
          seasonNr: fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    return;
  }

  result.data.allEpisode.seasons.forEach((season) => {
    const seasonNr = Number(season.seasonNr);

    season.episodes.forEach((episode) => {
      createPage(createEpisodePage({
        ...episode,
        seasonNr,
      }));
    });

    createPage(createSeasonPage({ seasonNr }));
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Season implements Node {
      id: ID!
      seasonNr: Int!
    }
    type Episode implements Node @childOf(types: ["Season"], many: true) {
      id: ID!
      seasonNr: Int
      episodeNr: Int!
      title: String!
    }
  `;
  createTypes(typeDefs);
};
