export const PRINTER_GEOM_VALUE_SET = 'teleprint/printer/geom/set';

export function printerGeomValueSet(values) {
  return {
    type: PRINTER_GEOM_VALUE_SET,
    values,
  };
}

