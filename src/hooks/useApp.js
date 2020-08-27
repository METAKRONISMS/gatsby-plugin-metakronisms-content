import { useReducer } from 'react';

const defaultState = {};

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
    case 'MAKE_EPISODE_STEP':
      return {
        ...state,
        steps: [...(state.steps || []), action.payload],
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

const useApp = ({
  initialState = defaultState,
} = {}) => {
  const proxyReducer = (fn) => (...args) => {
    const returned = fn(...args);
    // eslint-disable-next-line no-console
    console.info('dispatch app reducer', args, returned);
    return returned;
  };

  const [state, dispatch] = useReducer(proxyReducer(reducer), initialState);
  const proxyDispatch = (...args) => {
    const returned = dispatch(...args);
    // eslint-disable-next-line no-console
    console.info('dispatch app reducer', args, returned);
    return returned;
  };

  return {
    ...state,
    setSeason: (nr) => proxyDispatch({ type: 'SET_SEASON', payload: nr }),
    setEpisode: (nr) => proxyDispatch({ type: 'SET_EPISODE', payload: nr }),
    makeStep: (id) => proxyDispatch({ type: 'MAKE_EPISODE_STEP', payload: id }),
    toggleAudio: () => proxyDispatch({ type: 'TOGGLE_AUDIO' }),
    setAudioVolume: (val) => proxyDispatch({ type: 'SET_AUDIO_VOLUME', payload: val }),
  };
};

export default useApp;
