/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { createUseStyles, useTheme } from 'react-jss';

// eslint-disable-next-line
const useStyles = createUseStyles((theme) => ({}));

// this can be looking weird... and it is.
// It is meant to obfuscate the access logic
// (with help of the compiler renaming of variables)
// LOL (I will probably leave the sourcemaps anyways)

const inputSelector = 'input';
const inputProperty = 'value';
const verifPart1 = 's3';
const verifPart2 = 'r10';
const verifPart3 = 'u5l';
const verifPart4 = '1!?';
const persistence1 = 'local';
const persistence2 = 'Storage';
const persistence3 = 'lulz';

const read = () => JSON.parse(window[
  [
    persistence1,
    persistence2,
  ].join('')
][persistence3] || '""');
const write = (payload) => {
  window[
    [
      persistence1,
      persistence2,
    ].join('')
  ][persistence3] = JSON.stringify(payload);
};
const right = [
  verifPart1,
  verifPart2,
  verifPart3,
  verifPart4,
].join('');

const Denied = ({ onSetAccess }) => {
  const [state, setState] = useState(0);
  const theme = useTheme();
  const classes = useStyles({ theme });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const el = evt.target.querySelector(inputSelector);
    const left = el[inputProperty];
    write(left);
    setState(1);

    setTimeout(() => {
      if (left === right) {
        onSetAccess(true);
      } else {
        el[inputProperty] = '';
        el.focus();
        setState(2);
        setTimeout(() => setState(0), 1000);
      }
    }, 1000);
  };

  useEffect(() => {
    onSetAccess(read() === right);
  });

  return (
    <form className={classes.root} noValidate onSubmit={handleSubmit}>
      <label className={classes.label}>
        <input
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
          type="password"
          className={classes.input}
          placeholder="L. 9 access code required"
        />
      </label>
      <button
        type="submit"
        className={classes.button}
        disabled={!!state}
      >
        {[
          'Authorize',
          'Requesting',
          'Denied',
        ][state]}
      </button>
    </form>
  );
};

Denied.propTypes = {
  onSetAccess: PropTypes.func.isRequired,
};

const Access = ({ children }) => {
  const [access, setAccess] = React.useState(false);
  return (
    <>
      {access ? children : <Denied onSetAccess={setAccess} />}
    </>
  );
};

Access.propTypes = {
  children: PropTypes.node,
};

Access.defaultProps = {
  children: null,
};

export default Access;
