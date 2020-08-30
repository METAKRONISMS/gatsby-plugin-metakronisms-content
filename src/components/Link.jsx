import React from 'react';
import PropTypes from 'prop-types';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { createUseStyles, useTheme } from 'react-jss';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({}));

const Link = ({
  to,
  color,
  className,
  children,
}) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <AniLink
      data-mk-link
      paintDrip
      hex={theme[color] || color}
      to={to}
      className={[
        className,
        classes.root,
        classes[color],
      ].filter(Boolean).join(' ')}
    >
      {children}
    </AniLink>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};

Link.defaultProps = {
  color: 'primary',
  className: null,
};

export default Link;
