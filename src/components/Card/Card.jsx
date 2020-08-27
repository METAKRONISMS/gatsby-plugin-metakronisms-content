import React from 'react';
import PropTypes from 'prop-types';

import { createUseStyles, useTheme } from 'react-jss';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({}));

// eslint-disable-next-line react/prop-types
const Svg = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    viewBox="0 0 100 100"
    height="100"
    width="100"
    className={className}
  >
    <g>
      <path
        d="M 95,5 H 10 v 60"
      />
      <path
        d="m 10,40 -10,-10 v -20 l 10,-10 h 45 l 5,5"
      />
    </g>
  </svg>
);

const Card = ({
  children,
  className,
  hide,
  appear,
}) => {
  const [show, setShow] = React.useState(!appear);
  const theme = useTheme();
  const classes = useStyles({ theme });

  React.useEffect(() => {
    if (appear && !show) setShow(true);
  }, [appear, show]);

  return (
    <div
      className={[
        className,
        classes.root,
        hide && classes.hide,
        appear && classes.rootAppear,
        appear && show && classes.rootShow,
      ].filter(Boolean).join(' ')}
    >
      <div className={classes.inner}>
        {children}
      </div>

      <Svg className={classes.cornerTopLeft} />

      <Svg className={classes.cornerBottomRight} />
    </div>
  );
};

Card.displayName = 'MKCard';

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  appear: PropTypes.bool,
  hide: PropTypes.bool,
};

Card.defaultProps = {
  className: null,
  children: null,
  appear: null,
  hide: false,
};

export default Card;
