import React from 'react';

export default function useEpisode(episode = {}) {
  const [steps, setSteps] = React.useState([]);

  const getStepInfo = (wanted) => episode
    .episodeSteps[wanted || steps[steps.length - 1] || 'intro'];

  // eslint-disable-next-line no-unused-vars
  const makeStep = (target, choice = {}) => {
    // console.info('new step', target, choice, getStepInfo(target));
    setSteps((curr) => ([...curr, target]));
  };

  return {
    ...episode,
    steps,
    getStepInfo,
    makeStep,
  };
}
