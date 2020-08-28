import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';

import { createUseStyles, useTheme } from 'react-jss';
import Header from './Header';
import Footer from './Footer';
import Link from '../Link';
import Access from './Access';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({}));

const Layout = ({ children, noHeader = false }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const data = {};

  const [visible, setVisible] = React.useState(1);
  const handleMouseMove = () => !visible && setVisible(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1500);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove, { passive: true });
    };
  });

  return (
    <Access>
      <div className={classes.rootOverlay} />

      <div
        className={[
          classes.innerlay,
          visible && classes.innerlayVisible,
        ].filter(Boolean).join(' ')}
      >
        <div
          className={[
            classes.overlay,
            visible && classes.overlayVisible,
          ].filter(Boolean).join(' ')}
        >
          {!noHeader && (
            <Header
              className={classes.haeder}
              siteTitle={data.site.siteMetadata.title}
            />
          )}

          <div className={classes.menu}>
            <nav>
              <ul className={classes.menuLinks}>
                <li className={classes.menuLink}>
                  <Link color="secondary" to="/episodes">
                    Episodes
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <Footer />
        </div>
      </div>

      <main className={classes.main}>{children}</main>

      <div className={classes.rootUnderlay} />

      <ToastContainer />
    </Access>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noHeader: PropTypes.bool,
};

Layout.defaultProps = {
  noHeader: false,
};

Layout.displayName = 'MKLayout';

export default Layout;
