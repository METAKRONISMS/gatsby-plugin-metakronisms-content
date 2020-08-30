/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import { createUseStyles, useTheme } from 'react-jss';
import Layout from '../Layout/Layout';
import Card from '../Card/Card';
import EpisodeContext from './Context';
import useEpisode from './useEpisode';
import History from './History';
import { Connected as Graph } from './Graph';
import { Connected as Choices } from './Choices';
import useApp from '../../hooks/useApp';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({}));

export const episodePath = (s, e, p) => `/episodes/s${s}e${e}/${p || ''}`;

const mdxObject = (episodeMdx) => episodeMdx.nodes.reduce((obj, {
  parent: { name },
  frontmatter: { title, choices },
  body,
}) => ({
  ...obj,
  [name]: {
    id: name,
    title,
    body,
    choices: choices || [],
  },
}), {});

const Episode = (props) => {
  const {
    pageContext: {
      title,
      assets,
    },
    data: {
      episodeMdx,
    },
  } = props;

  /*
  console.info(JSON.stringify({
    // eslint-disable-next-line react/destructuring-assignment
    pageContext: props.pageContext,
    // eslint-disable-next-line react/destructuring-assignment
    data: props.data,
  }, null, 2));
  */

  const mdx = mdxObject(episodeMdx);
  const [progress, setStepProgress] = React.useState(0);

  const appStuff = useApp();
  const episodeContext = useEpisode({
    title,
    assets: (assets || []).reduce((obj, asset) => ({
      ...obj,
      [asset.base]: asset.publicURL,
    }), {}),
    episodeSteps: mdx,
    setStepProgress,
    ...appStuff,
  });
  const currentStep = episodeContext.steps.length
    ? episodeContext.steps[episodeContext.steps.length - 1]
    : 'intro';
  const theme = useTheme();
  const classes = useStyles({ theme });

  const { body = null } = episodeContext.getStepInfo(currentStep) || {};

  return (
    <EpisodeContext.Provider value={episodeContext}>
      <Layout>
        <div className={classes.root}>
          <div className={classes.main}>
            <div className={classes.mdxWrapper}>
              {body
                ? (<MDXRenderer>{body}</MDXRenderer>)
                : 'Something is not quite right. Sorry'}
            </div>

            <div className={classes.episodeInfo}>
              <Card className={classes.episodeInfoCard} appear>
                <History />
              </Card>

              <Card className={classes.episodeInfoCard} appear>
                <Graph
                  onItemMouseEnter={(...args) => { console.info('MouseEnter', ...args); }}
                  onItemMouseOut={(...args) => { console.info('MouseOut', ...args); }}
                  onItemClick={(...args) => { console.info('Click', ...args); }}
                />
              </Card>
            </div>

            <Choices progress={progress} />
          </div>
        </div>
      </Layout>
    </EpisodeContext.Provider>
  );
};

Episode.propTypes = {
  pageContext: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    assets: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  data: PropTypes.shape({
    episodeMdx: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({
        body: PropTypes.string.isRequired,
        parent: PropTypes.shape({
          name: PropTypes.string.isRequired,
        }).isRequired,
        frontmatter: PropTypes.shape({
          title: PropTypes.string,
        }).isRequired,
      })).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Episode;
