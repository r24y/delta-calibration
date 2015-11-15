import React, {Component} from 'react';

import Segment from '../components/Segment';
import Dropdown from '../components/Dropdown';
import SerialConnectionPanel from './SerialConnectionPanel';
import SimulatorConnectionPanel from './SimulatorConnectionPanel';

import RectangularBedOptions from './panels/RectangularBedOptions';
import CircularBedOptions from './panels/CircularBedOptions';
import CartesianPrinterOptions from './panels/CartesianPrinterOptions';
import DeltaPrinterOptions from './panels/DeltaPrinterOptions';

import '../semantic/dist/components/form.css';
import '../semantic/dist/components/header.css';
import '../semantic/dist/components/button.css';

const CONNECTION_PANELS = {
  "Serial port": SerialConnectionPanel,
};

const BED_TYPE_PANELS = {
  "Rectangular": RectangularBedOptions,
  "Circular": CircularBedOptions,
};

const PRINTER_TYPE_PANELS = {
  "Cartesian": CartesianPrinterOptions,
  "Delta": DeltaPrinterOptions,
};

export default class ConnectionPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connectionType: Object.keys(CONNECTION_PANELS)[0],
      bedShape: Object.keys(BED_TYPE_PANELS)[0],
      printerGeom: Object.keys(PRINTER_TYPE_PANELS)[0],
    };
  }
  render() {
    return (<div>
      <Segment className="top attached">
        <h3 className="ui dividing header">Printer configuration</h3>
        <div className="ui form">
          <div className="field">
            <label>Print volume height</label>
            <div className="ui right labeled input">
              <input type="number" defaultValue={90} />
              <div className="ui basic label">mm</div>
            </div>
          </div>
        </div>
        <CircularBedOptions />
        <DeltaPrinterOptions />
        <h3 className="ui dividing header">Connection</h3>
        <SerialConnectionPanel />
      </Segment>
      <div className="two bottom attached ui buttons">
        <button className="ui negative button" onClick={() => this.props.onCancel()}>
          <i className="remove circle icon" /> Cancel
        </button>
        <button className="disabled ui positive button" onClick={() => this.props.onSubmit()}>
          <i className="plug icon" /> Connect
        </button>
      </div>
    </div>);
  }
}
