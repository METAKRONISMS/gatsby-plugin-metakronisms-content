import { useEffect } from 'react';

import { createUseStyles, useTheme } from 'react-jss';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({}));

const useBodyBackground = (url) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  useEffect(() => {
    const bdy = document.body;
    if (url) {
      bdy.classList.add(classes.root);
      bdy.style.backgroundImage = `url(${url})`;
    }
    return () => {
      bdy.classList.remove(classes.root);
      bdy.style.backgroundImage = null;
    };
  }, [classes.root, url]);
};

export default useBodyBackground;
