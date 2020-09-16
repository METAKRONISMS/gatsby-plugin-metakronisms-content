import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';

// eslint-disable-next-line no-unused-vars
const useStyles = createUseStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
}), {
  name: 'Layout',
});

const Layout = ({
  children,
  className,
}) => {
  const theme = useTheme();
  const styles = useStyles({ theme });

  return (
    <div
      className={[
        className,
        styles.root,
      ].filter(Boolean).join(' ')}
    >
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: null,
};

export default Layout;
