import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import Link from '../Link';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({}));

const Header = ({ siteTitle }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <header className={classes.root}>
      <h1 className={classes.title}>
        <Link color="secondaryRevert" to="/" className={classes.homeLink}>
          {siteTitle}
        </Link>
      </h1>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

Header.displayName = 'MKHeader';

export default Header;
