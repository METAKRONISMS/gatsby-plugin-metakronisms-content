import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useEpisode } from './Context';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({
  root: {},
}), {
  name: 'History',
});

const History = () => {
  const {
    getStepInfo,
    steps,
  } = useEpisode();
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.root}>
      <div>Episode history:</div>

      {steps.map((stepId, stepIdx) => {
        const step = getStepInfo(stepId);

        return (step && (
          // eslint-disable-next-line react/no-array-index-key
          <div key={`${stepId}-${stepIdx}`}>{step.title}</div>
        )) || null;
      })}
    </div>
  );
};

export default History;
