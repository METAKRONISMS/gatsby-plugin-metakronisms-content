import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import Link from '../Link';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({}));

const Footer = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <footer className={classes.root}>
      <nav>
        <ul className={classes.list}>
          <li className={classes.item}>
            <Link color="secondaryRevert" to="/about">About</Link>
          </li>
          <li className={classes.item}>
            <Link color="secondaryRevert" to="/concept">Concept</Link>
          </li>
          <li className={classes.item}>
            <Link color="secondaryRevert" to="/terms">Terms Of Use</Link>
          </li>
          <li className={classes.item}>
            <Link color="secondaryRevert" to="/privacy">Privacy</Link>
          </li>
          <li className={classes.item}>
            <Link color="secondaryRevert" to="/imprint">Imprint</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

Footer.displayName = 'MKFooter';

export default Footer;
