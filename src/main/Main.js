import React, {Component} from 'react';

import MachineControls from '../controls/MachineControls';
import GcodeConsole from '../controls/GcodeConsole';
import NotConnected from '../controls/NotConnected';
import ConnectionPanel from '../controls/ConnectionPanel';

import '../semantic/dist/components/container.css' ;
import '../semantic/dist/components/site.css' ;
import '../semantic/dist/components/icon.css' ;
import '../semantic/dist/components/header.css' ;

import Grid, {Column} from '../components/Grid';

export default class Main extends Component {
  render() {
    return (<div className="" style={{padding: 20, paddingTop: 20}}>
        {this.props.children}
    </div>);
  }
}
