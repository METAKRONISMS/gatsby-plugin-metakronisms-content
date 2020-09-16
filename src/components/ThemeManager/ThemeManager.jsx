import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, createUseStyles, useTheme } from 'react-jss';
import { hsl, wcagContrast, formatHex8 } from 'culori';

const spacing = (times = 1) => 8 * times;
const cap01 = (val) => Math.min(Math.max(0, val), 1);
const getContrastColor = (color, a, b) => {
  const ac = wcagContrast(a, color);
  const bc = wcagContrast(b, color);
  return ac >= bc ? a : b;
};

const expandPaletteColor = (input, black = '#111', white = '#eee', diff = 0.12) => {
  const withMain = (main) => {
    const parsedMain = { alpha: 1, ...hsl(main) };

    const hover = formatHex8({
      ...parsedMain,
      l: cap01(parsedMain.l - diff),
    });

    const disabled = formatHex8({
      ...parsedMain,
      s: parsedMain.s * 0.5,
      l: parsedMain.l + ((1 - parsedMain.l) * 0.75),
    });

    return {
      main,
      hover,
      disabled,
      textContrast: getContrastColor(main, black, white),
      textHover: getContrastColor(hover, black, white),
      textDisabled: getContrastColor(disabled, black, white),
    };
  };

  if (typeof input === 'string') {
    const main = input;
    return withMain(main);
  }

  const { main } = input;
  return {
    ...input,
    ...withMain(main),
  };
};

const themeBase = ({
  black = '#111',
  white = '#fafafa',
  mode = 'light',
  diff = 0.12,
}) => {
  const palette = {
    primary: expandPaletteColor('purple', black, white, diff),
    secondary: expandPaletteColor('yellow', black, white, diff),
    error: expandPaletteColor('red', black, white, diff),
    warning: expandPaletteColor('orange', black, white, diff),
    info: expandPaletteColor('lightgrey', black, white, diff),
    success: expandPaletteColor('green', black, white, diff),
    common: { black, white },
    color: mode === 'light' ? black : white,
    backgroundColor: mode === 'light' ? white : black,
  };

  const cardBackground = hsl(palette.backgroundColor);
  const card = {
    borderRadius: spacing(0.5),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: mode === 'light'
      ? `hsla(0deg 0% 0% / ${cap01(diff) * 50}%)`
      : `hsla(0deg 100% 100% / ${cap01(diff) * 50}%)`,
    backgroundColor: formatHex8({
      ...cardBackground,
      l: cardBackground.l + (diff * (mode === 'light' ? -0.25 : 0.25)),
    }),
  };

  const base = mode === 'light'
    ? '0,0,0'
    : '255,255,255';

  return {
    spacing,
    palette,
    mixins: {
      card,
      button: {
        fontFamily: 'inherit',
        fontWeight: 500,
        borderRadius: spacing(0.5),
        borderStyle: 'solid',
        borderWidth: 1,
        padding: {
          top: spacing(0.7),
          bottom: spacing(0.7),
          left: spacing(1.2),
          right: spacing(1.2),
        },
        textTransform: 'uppercase',
      },
      typography: {
        fontSize: '1rem',
      },
    },
    shadows: [
      'none',
      `0px 2px 1px -1px rgba(${base},0.2),
       0px 1px 1px 0px rgba(${base},0.14),
       0px 1px 3px 0px rgba(${base},0.12)`,

      `0px 3px 1px -2px rgba(${base},0.2),
       0px 2px 2px 0px rgba(${base},0.14),
       0px 1px 5px 0px rgba(${base},0.12)`,

      `0px 3px 3px -2px rgba(${base},0.2),
       0px 3px 4px 0px rgba(${base},0.14),
       0px 1px 8px 0px rgba(${base},0.12)`,

      `0px 2px 4px -1px rgba(${base},0.2),
       0px 4px 5px 0px rgba(${base},0.14),
       0px 1px 10px 0px rgba(${base},0.12)`,

      `0px 3px 5px -1px rgba(${base},0.2),
       0px 5px 8px 0px rgba(${base},0.14),
       0px 1px 14px 0px rgba(${base},0.12)`,

      `0px 3px 5px -1px rgba(${base},0.2),
       0px 6px 10px 0px rgba(${base},0.14),
       0px 1px 18px 0px rgba(${base},0.12)`,

      `0px 4px 5px -2px rgba(${base},0.2),
       0px 7px 10px 1px rgba(${base},0.14),
       0px 2px 16px 1px rgba(${base},0.12)`,

      `0px 5px 5px -3px rgba(${base},0.2),
       0px 8px 10px 1px rgba(${base},0.14),
       0px 3px 14px 2px rgba(${base},0.12)`,

      `0px 5px 6px -3px rgba(${base},0.2),
       0px 9px 12px 1px rgba(${base},0.14),
       0px 3px 16px 2px rgba(${base},0.12)`,

      `0px 6px 6px -3px rgba(${base},0.2),
       0px 10px 14px 1px rgba(${base},0.14),
       0px 4px 18px 3px rgba(${base},0.12)`,

      `0px 6px 7px -4px rgba(${base},0.2),
       0px 11px 15px 1px rgba(${base},0.14),
       0px 4px 20px 3px rgba(${base},0.12)`,

      `0px 7px 8px -4px rgba(${base},0.2),
       0px 12px 17px 2px rgba(${base},0.14),
       0px 5px 22px 4px rgba(${base},0.12)`,

      `0px 7px 8px -4px rgba(${base},0.2),
       0px 13px 19px 2px rgba(${base},0.14),
       0px 5px 24px 4px rgba(${base},0.12)`,

      `0px 7px 9px -4px rgba(${base},0.2),
       0px 14px 21px 2px rgba(${base},0.14),
       0px 5px 26px 4px rgba(${base},0.12)`,

      `0px 8px 9px -5px rgba(${base},0.2),
       0px 15px 22px 2px rgba(${base},0.14),
       0px 6px 28px 5px rgba(${base},0.12)`,

      `0px 8px 10px -5px rgba(${base},0.2),
       0px 16px 24px 2px rgba(${base},0.14),
       0px 6px 30px 5px rgba(${base},0.12)`,

      `0px 8px 11px -5px rgba(${base},0.2),
       0px 17px 26px 2px rgba(${base},0.14),
       0px 6px 32px 5px rgba(${base},0.12)`,

      `0px 9px 11px -5px rgba(${base},0.2),
       0px 18px 28px 2px rgba(${base},0.14),
       0px 7px 34px 6px rgba(${base},0.12)`,

      `0px 9px 12px -6px rgba(${base},0.2),
       0px 19px 29px 2px rgba(${base},0.14),
       0px 7px 36px 6px rgba(${base},0.12)`,

      `0px 10px 13px -6px rgba(${base},0.2),
       0px 20px 31px 3px rgba(${base},0.14),
       0px 8px 38px 7px rgba(${base},0.12)`,

      `0px 10px 13px -6px rgba(${base},0.2),
       0px 21px 33px 3px rgba(${base},0.14),
       0px 8px 40px 7px rgba(${base},0.12)`,

      `0px 10px 14px -6px rgba(${base},0.2),
       0px 22px 35px 3px rgba(${base},0.14),
       0px 8px 42px 7px rgba(${base},0.12)`,

      `0px 11px 14px -7px rgba(${base},0.2),
       0px 23px 36px 3px rgba(${base},0.14),
       0px 9px 44px 8px rgba(${base},0.12)`,

      `0px 11px 15px -7px rgba(${base},0.2),
       0px 24px 38px 3px rgba(${base},0.14),
       0px 9px 46px 8px rgba(${base},0.12)`,
    ],
  };
};

const useStyles = createUseStyles((theme) => ({
  '@global': {
    html: {
      fontSize: 14,
    },
    body: {
      fontFamily: '"Open Sans",Roboto,-apple-system,".SFNSText-Regular","San Francisco",BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Helvetica,Arial,sans-serif',
    },
    '#root': {
      color: theme.palette.color,
      backgroundColor: theme.palette.backgroundColor,
    },
  },
}));

export const CSSBaseline = () => {
  const theme = useTheme();
  useStyles({ theme });
  return null;
};

const ThemeManager = ({
  mode,
  noBaseline,
  children,
}) => {
  const theme = themeBase({ mode });
  return (
    <ThemeProvider theme={theme}>
      <>
        {!noBaseline && <CSSBaseline />}

        {children}
      </>
    </ThemeProvider>
  );
};

ThemeManager.propTypes = {
  mode: PropTypes.oneOf(['light', 'dark']).isRequired,
  noBaseline: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

ThemeManager.defaultProps = {
  noBaseline: false,
};

export default ThemeManager;
