import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';
import SlidesContext from './Context';
import useSlides from './useSlides';
import SlidesControls from './Controls';
import { withEpisode } from '../Episode/Context';
import useBodyBackground from '../../hooks/useBodyBackground';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({}));

const Slides = ({
  children,
  getStepInfo,
  makeStep,
  setStepProgress,
  background,
}) => {
  const slidesContext = useSlides(children.length);
  useBodyBackground(background);
  const theme = useTheme();
  const classes = useStyles({ theme });

  if (typeof window === 'undefined') return children;

  if (!children.length) return '(No Slides)';

  const showSlide = Math.min(slidesContext.currentSlide, slidesContext.slidesCount - 1);
  setStepProgress(slidesContext.currentSlide / slidesContext.slidesCount);

  return (
    <SlidesContext.Provider value={slidesContext}>
      <div className={classes.root}>
        <div className={classes.slidesWrapper}>
          {children[showSlide]}
        </div>

        <SlidesControls
          getStepInfo={getStepInfo}
          makeStep={makeStep}
        />
      </div>
    </SlidesContext.Provider>
  );
};

Slides.propTypes = {
  getStepInfo: PropTypes.func.isRequired,
  makeStep: PropTypes.func.isRequired,
  setStepProgress: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  background: PropTypes.string,
};

Slides.defaultProps = {
  background: null,
};

export default Slides;

export const WithEpisode = withEpisode(Slides);
