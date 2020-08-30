import React from 'react';
import PropTypes from 'prop-types';
import { withEpisode } from './Context';

const StepLink = withEpisode(({
  makeStep,
  children,
  text,
}) => (
  <button onClick={makeStep} type="button">
    {children || text || 'Missing either text attribute or children'}
  </button>
));

StepLink.propTypes = {
  makeStep: PropTypes.func.isRequired,
  children: PropTypes.node,
  text: PropTypes.node,
};

StepLink.defaultProps = {
  children: null,
  text: null,
};

export default StepLink;
