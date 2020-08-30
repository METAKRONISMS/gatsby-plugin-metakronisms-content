import React from 'react';
import PropTypes from 'prop-types';

import { createUseStyles, useTheme } from 'react-jss';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({
  root: {
    margin: 10,
  },
  inner: {
    border: '1px solid currentColor',
    padding: 9,
  },
}));

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
    </div>
  );
};

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
