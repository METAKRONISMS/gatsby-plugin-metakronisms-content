/* eslint-disable no-underscore-dangle */
import {
  // useCallback,
  useReducer,
} from 'react';

const defaultState = {
  stepProgress: 0,
  seasonNr: 0,
  episodeNr: 0,
  steps: [],
  audioMuted: false,
  audioVolume: 1,
};

const init = () => defaultState;

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEASON':
      return {
        ...state,
        seasonNr: action.payload,
      };
    case 'SET_EPISODE':
      return {
        ...state,
        episodeNr: action.payload,
      };
    case 'SET_STEP_PROGRESS':
      return {
        ...state,
        stepProgress: Math.max(0, Math.min(1, action.payload)),
      };
    case 'MAKE_EPISODE_STEP':
      return {
        ...state,
        steps: [...(state.steps || []), action.payload],
        stepProgress: 0,
      };
    case 'TOGGLE_AUDIO':
      return {
        ...state,
        audioMuted: !state.audioMuted,
      };
    case 'SET_AUDIO_VOLUME':
      return {
        ...state,
        audioVolume: action.payload,
      };
    default:
      throw new Error(`Invalid action "${action.type}"`);
  }
};

const proxyReducer = (fn) => (...args) => {
  const returned = fn(...args);
  return returned;
};

const proxyDispatch = (dispatch) => (...args) => {
  const returned = dispatch(...args);
  return returned;
};

const useApp = (opts) => {
  const {
    initialState = defaultState,
  } = opts || {
    initialState: defaultState,
  };
  const [state, dispatch] = useReducer(proxyReducer(reducer), initialState, init);
  const proxiedDispatch = proxyDispatch(dispatch);

  return {
    ...state,
    setStepProgress: (val) => proxiedDispatch({ type: 'SET_STEP_PROGRESS', payload: val }),
    setSeason: (nr) => proxiedDispatch({ type: 'SET_SEASON', payload: nr }),
    setEpisode: (nr) => proxiedDispatch({ type: 'SET_EPISODE', payload: nr }),
    makeStep: (id) => proxiedDispatch({ type: 'MAKE_EPISODE_STEP', payload: id }),
    toggleAudio: () => proxiedDispatch({ type: 'TOGGLE_AUDIO' }),
    setAudioVolume: (val) => proxiedDispatch({ type: 'SET_AUDIO_VOLUME', payload: val }),
  };
};

export default useApp;

export const useAppStuff = () => {
  const stuff = useApp();
  // if (typeof window !== 'undefined') {
  //   window.__mkMDXHack = window.__mkMDXHack || stuff;
  //   return window.__mkMDXHack;
  // }
  return stuff;
};
