import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';
import SlidesContext from './Context';
import SlidesControls from './Controls';

import useBodyBackground from '../../hooks/useBodyBackground';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({}));

const Slides = ({
  children,
  background,
  defaultDuration,
  classes: baseClasses,
  // eslint-disable-next-line react/prop-types
  episodeContext: { setStepProgress = () => { }, stepProgress = 0 } = {},
}) => {
  const ini = Math.min(children.length - 1, stepProgress * children.length);
  const [currentSlide, setCurrentSlide] = React.useState(ini);

  const proxy = React.useCallback((val) => {
    const now = val / children.length;
    if (stepProgress !== now && now <= 1) setStepProgress(now);
    return val;
  }, [children.length, stepProgress, setStepProgress]);

  const prevSlide = React.useCallback(() => {
    setCurrentSlide((prev) => proxy(prev - 1 > -1 ? prev - 1 : prev));
  }, [proxy]);

  const nextSlide = React.useCallback(() => {
    // important! `<=` allows to show buttons
    setCurrentSlide((prev) => proxy(prev <= children.length ? prev + 1 : prev));
  }, [children.length, proxy]);

  const showSlide = Math.min(currentSlide, children.length - 1);

  const ctx = {
    slidesCount: children.length,
    currentSlide,
    defaultDuration,
    showSlide,
    prevSlide,
    nextSlide,
  };

  useBodyBackground(background);

  const theme = useTheme();
  const classes = {
    ...useStyles({ theme }),
    ...(baseClasses || {}),
  };

  if (typeof window === 'undefined') {
    return null;
    // return (
    //   <SlidesContext.Provider value={{ ...ctx }}>
    //     <div className={classes.root}>
    //       <div className={classes.slidesWrapper}>
    //         {children}
    //       </div>
    //     </div>
    //   </SlidesContext.Provider>
    // );
  }

  if (!children.length) return '(No Slides)';

  return (
    <SlidesContext.Provider value={ctx}>
      <div className={classes.root}>
        <div className={classes.slidesWrapper}>
          {children[showSlide]}
        </div>

        <SlidesControls />
      </div>
    </SlidesContext.Provider>
  );
};

Slides.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  background: PropTypes.string,
  defaultDuration: PropTypes.number,
  episodeContext: PropTypes.shape({}).isRequired,
};

Slides.defaultProps = {
  classes: null,
  background: null,
  defaultDuration: null,
};

export default Slides;

export const WithEpisode = Slides;
// export const WithEpisode = withEpisode(Slides);
