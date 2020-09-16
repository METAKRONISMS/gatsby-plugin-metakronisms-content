import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, createUseStyles } from 'react-jss';
import Button from '../Button/Button';

const colorNames = [
  'primary',
  'secondary',
  'error',
  'warning',
  'info',
  'success',
];

const useTypographyStyles = createUseStyles((theme) => ({
  root: ({
    inverted,
    color,
  }) => ({
    ...theme.mixins.typography,
    [inverted ? 'backgroundColor' : 'color']: theme.palette[color].main,
    color: inverted
      ? theme.palette[color].textContrast
      : undefined,
  }),
}));

// eslint-disable-next-line react/prop-types
const Typography = ({ children, ...props }) => {
  const theme = useTheme();
  const styles = useTypographyStyles({ ...props, theme });
  return (
    <p
      className={styles.root}
    >
      {children || 'test'}
    </p>
  );
};

const useGroupStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    flexGrow: 1,
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
}));

const Group = ({ children }) => {
  const styles = useGroupStyles();
  return (
    <div className={styles.root}>
      {colorNames.map((color) => (
        <div
          key={color}
          className={styles.item}
        >
          <h5>{color}</h5>

          {[false, true].map((disabled) => (
            <Button
              key={`${color}-${disabled}`}
              disabled={disabled}
              color={color}
            >
              {children || 'test'}
            </Button>
          ))}

          {[false, true].map((inverted) => (
            <Typography
              key={`${color}-${inverted}`}
              color={color}
              inverted={inverted}
            >
              {children || 'test'}
            </Typography>
          ))}
        </div>
      ))}
    </div>
  );
};

Group.propTypes = {
  children: PropTypes.node,
};

Group.defaultProps = {
  children: null,
};

export default {
  title: 'Styling/ThemeManager',
  component: Group,
  args: { },
  argTypes: { },
};

// eslint-disable-next-line react/jsx-props-no-spreading
export const Basic = (args) => <Group {...args} />;
Basic.args = {};
