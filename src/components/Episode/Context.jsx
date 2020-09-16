import React, { useContext, createContext } from 'react';

const noop = () => { };

export const defaultEpisode = {
  title: '',
  assets: [],
  steps: [],
  episodeSteps: {},
  currentStep: {},
  stepProgress: 0,
  showChoices: false,
};

const EpisodeContext = createContext({
  getStepInfo: noop,
  makeStep: noop,
  setStepProgress: noop,
  ...defaultEpisode,
});

export default EpisodeContext;

export const useEpisode = () => useContext(EpisodeContext);

export const withEpisode = (Comp) => (props) => (
  <EpisodeContext.Consumer>
    {(ctx) => (
      <Comp
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...{ ...props, ...ctx }}
      />
    )}
  </EpisodeContext.Consumer>
);
