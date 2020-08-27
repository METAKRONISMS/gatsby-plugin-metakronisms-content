import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';
import { withEpisode } from './Context';
import Button from '../Button';
import Card from '../Card/Card';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({}));

const Choices = ({
  getStepInfo,
  makeStep,
  progress,
}) => {
  const step = getStepInfo();
  const handleChoice = (choice) => () => {
    makeStep(choice.target, choice);
  };
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Card className={classes.root} hide={progress <= 1}>
      <div
        className={[
          classes.inner,
          progress <= 1 && classes.hide,
        ].filter(Boolean).join(' ')}
      >
        {step && step.choices.map((choice) => (
          <Button
            key={choice.target}
            onClick={handleChoice(choice)}
            className={classes.button}
          >
            {choice.title}
          </Button>
        ))}
      </div>
    </Card>
  );
};

Choices.propTypes = {
  getStepInfo: PropTypes.func.isRequired,
  makeStep: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
};

Choices.displayName = 'MKEpisode.Choices';

export default Choices;

export const Connected = withEpisode(Choices);
