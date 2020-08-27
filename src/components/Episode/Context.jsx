import React from 'react';

export const defaultEpisode = {
  steps: [],
  episodeSteps: {},
  getStepInfo: () => { },
  makeStep: () => { },
  setStepProgress: () => { },
};

const EpisodeContext = React.createContext(defaultEpisode);

EpisodeContext.displayName = 'MKEpisodeContext';

export default EpisodeContext;

export const withEpisode = (Comp) => {
  const returned = (props) => (
    <EpisodeContext.Consumer>
      {
        (ctx) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Comp {...{ ...props, ...ctx }} />
        )
      }
    </EpisodeContext.Consumer>
  );

  returned.displayName = `withEpisode(${Comp.displayName || Comp.name})`;

  return returned;
};
