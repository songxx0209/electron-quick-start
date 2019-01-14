// import React from 'react';
// import ReactDOM from 'react-dom';

import * as React from "react";
import  "./hello.scss";

import Button from '@material-ui/core/Button';


interface Props {}
export class Hello extends React.Component<Props> {
  render() {
    return (
      <div className="xx">
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </div>
    );
  }
}