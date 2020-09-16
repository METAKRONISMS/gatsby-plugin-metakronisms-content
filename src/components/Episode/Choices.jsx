import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';
import { useEpisode } from './Context';
import Button from '../Button';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({
  root: {},
  hidden: {
    opacity: 0.25,
  },
  button: {},
}));

export const defaultComponents = { Button };

const Choices = ({
  components: {
    Button: ButtonComp = Button,
  } = defaultComponents,
  progress,
  classes: baseClasses,
}) => {
  const episode = useEpisode();

  const {
    makeStep,
    getStepInfo,
  } = episode;

  const step = getStepInfo();
  const handleChoice = (choice) => () => {
    makeStep(choice.target, choice);
  };
  const theme = useTheme();
  const classes = {
    ...useStyles({ theme }),
    ...(baseClasses || {}),
  };

  if (!step || !Array.isArray(step.choices) || !step.choices.length) {
    return null;
  }

  const hidden = !step.showChoices && progress < 1;

  return (
    <div
      data-hidden={hidden}
      className={[
        classes.root,
        hidden && classes.hidden,
      ].filter(Boolean).join(' ')}
    >
      {step.choices.map((choice) => (
        <ButtonComp
          key={choice.target}
          onClick={handleChoice(choice)}
          className={classes.button}
          hidden={hidden}
        >
          {choice.title}
        </ButtonComp>
      ))}
    </div>
  );
};

Choices.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  components: PropTypes.shape({
    Button: PropTypes.elementType,
  }),
  progress: PropTypes.number,
};

Choices.defaultProps = {
  classes: null,
  components: defaultComponents,
  progress: 0,
};

export default Choices;

export const Connected = Choices;
