import {
  PRINTER_GEOM_VALUE_SET
} from './printerActions';

const defaultState = {
  geometry: {},
};

export default function printer(state = defaultState, action) {
  switch (action.type) {
    case PRINTER_GEOM_VALUE_SET:
      return {
        ...state,
        geometry: {
          ...state.geometry,
          ...action.values,
        },
      };
    default: return state;
  }
}
