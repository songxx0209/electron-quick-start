// import React from 'react';
// import ReactDOM from 'react-dom';

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/hello";

const Index = () => {
  return <div>
    Hello React!  nihaoa

    <Hello />
  </div>;
};

ReactDOM.render(<Index />, document.getElementById('root'));