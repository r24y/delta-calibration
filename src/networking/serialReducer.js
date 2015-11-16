import {
  SERIAL_PORT_LIST,
  SERIAL_PORT_LIST_SUCCESS,
  SERIAL_PORT_LIST_FAILURE,
  SERIAL_PORT_CONNECT,
  SERIAL_PORT_CONNECT_SUCCESS,
  SERIAL_PORT_CONNECT_FAILURE,
} from './serialActions';

const defaultState = {
  loadingState: 'idle',
  status: 'disconnected',
  ports: [],
};

export default function serial(state = defaultState, action) {
  switch (action.type) {
    case SERIAL_PORT_LIST:
      return {
        ...state,
        loadingState: 'loading',
      };
    case SERIAL_PORT_LIST_SUCCESS:
      return {
        ...state,
        loadingState: 'idle',
        ports: action.ports.filter(p => p.pnpId),
      };
    case SERIAL_PORT_LIST_FAILURE:
      return {
        ...state,
        loadingState: 'error',
      };
    case SERIAL_PORT_CONNECT:
      return {
        ...state,
        status: 'connecting',
        portID: action.portID,
      };
    case SERIAL_PORT_CONNECT_SUCCESS:
      return {
        ...state,
        status: 'connected',
        portID: action.portID,
      };
    case SERIAL_PORT_CONNECT_FAILURE:
      return {
        ...state,
        status: 'error',
        portID: action.portID,
      };
    default: return state;
  }
}

