import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
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
    <div data-visible={visible}>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
