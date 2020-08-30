import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { withEpisode } from './Context';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({}));

const History = withEpisode(({
  getStepInfo,
  steps,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.root}>
      <div>Episode history:</div>

      {steps.map((stepId) => {
        const step = getStepInfo(stepId);

        return (step && (
        <div key={stepId}>{step.title}</div>
        )) || null;
      })}
    </div>
  );
});

export default History;
