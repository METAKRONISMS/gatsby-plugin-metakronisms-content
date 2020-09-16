/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import EpisodeContext, { defaultEpisode } from './Context';
import { useAppStuff } from '../../hooks/useApp';

import Button from '../Button/Button';
import History from './History';
import { Connected as Graph } from './Graph';
import Choices from './Choices';
import Slides, { Slide } from '../Slides';

export const defaultComponents = {
  Button,
  History,
  Graph,
  Choices,
  Slides,
  Slide,
};

export const episodePath = (s, e, p) => `/episodes/s${s}e${e}/${p || ''}`;

const mdxObject = (episodeMdx) => episodeMdx.nodes.reduce((obj, {
  parent: { name },
  frontmatter: { title, choices, showChoices },
  body,
}) => ({
  ...obj,
  [name]: {
    id: name,
    title,
    body,
    showChoices,
    choices: choices || [],
  },
}), {});

const Episode = (props) => {
  const appStuff = useAppStuff();

  const {
    classes: baseClasses,
    components,
    pageContext: {
      title,
      assets,
    },
    data: {
      episodeMdx,
    },
  } = props;

  const {
    Button: ButtonComp,
    History: HistoryComp,
    Graph: GraphComp,
    Choices: ChoicesComp,
    Slides: SlidesComp = Slides,
    Slide: SlideComp = Slide,
  } = { ...defaultComponents, ...(components || {}) };

  const mdx = mdxObject(episodeMdx);

  const {
    steps = [],
    stepProgress: progress,
  } = appStuff;

  const currentStepName = steps.length
    ? steps[steps.length - 1]
    : 'intro';
  const getStepInfo = (wanted = currentStepName) => mdx[wanted || steps[steps.length - 1] || 'intro'];

  const ctx = {
    ...defaultEpisode,
    title,
    assets: (assets || []).reduce((obj, asset) => ({
      ...obj,
      [asset.base]: asset.publicURL,
    }), {}),
    episodeSteps: mdx,
    getStepInfo,
    ...appStuff,
  };

  const { body = null } = getStepInfo() || {};

  const classes = { ...(baseClasses || {}) };

  // eslint-disable-next-line no-unused-vars
  const allComponents = {
    ...(components || {}),
    Slides: SlidesComp,
    Slide: SlideComp,
  };

  const readyComponents = { ...allComponents };
  Object.keys(allComponents).forEach((key) => {
    const Comp = allComponents[key];
    readyComponents[key] = (thisProps) => (
      <Comp
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...thisProps}
        episodeContext={ctx}
      />
    );
  });

  const children = body
    ? (
      <MDXRenderer
        scope={{
          ...readyComponents,
          ...ctx,
        }}
      >
        {body}
      </MDXRenderer>
    )
    : 'Something is not quite right. Sorry';

  return (
    <EpisodeContext.Provider value={ctx}>
      <section className={classes.root}>
        <div className={classes.main}>
          <main className={classes.mdxWrapper}>
            {children}
          </main>

          <div
            className={[
              classes.choicesWrapper,
              progress < 1 && classes.choicesWrapperHidden,
            ].filter(Boolean).join(' ')}
          >
            <ChoicesComp
              className={classes.choices}
              components={{
                Button: ButtonComp,
              }}
              progress={progress}
            />
          </div>

          <div className={classes.episodeInfo}>
            <HistoryComp className={classes.history} />

            <GraphComp
              className={classes.graph}
              onItemMouseEnter={(...args) => { console.info('MouseEnter', ...args); }}
              onItemMouseOut={(...args) => { console.info('MouseOut', ...args); }}
              onItemClick={(...args) => { console.info('Click', ...args); }}
            />
          </div>
        </div>
      </section>
    </EpisodeContext.Provider>
  );
};

Episode.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
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
  components: PropTypes.objectOf(PropTypes.elementType),
  /* eslint-disable */
  path: PropTypes.string,
  navigate: PropTypes.func,
  location: PropTypes.object,
  pageResources: PropTypes.object,
  uri: PropTypes.string,
  params: PropTypes.object,
  pathContext: PropTypes.object,
  transitionStatus: PropTypes.string,
  current: PropTypes.shape({
    state: PropTypes.object,
    delay: PropTypes.number,
    length: PropTypes.number,
  }),
  mount: PropTypes.bool,
  entry: PropTypes.shape({
    state: PropTypes.object,
    delay: PropTypes.number,
    length: PropTypes.number,
  }),
  exit: PropTypes.shape({
    state: PropTypes.object,
    delay: PropTypes.number,
    length: PropTypes.number,
  }),
  /* eslint-enable */
};

Episode.defaultProps = {
  classes: null,
  components: null,
};

export default Episode;
