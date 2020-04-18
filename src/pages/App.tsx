import * as React from "react";
import './App.scss';
// import Button from '@material-ui/core/Button';
import TopNav from '../views/left/TopNav';

interface Props {}
export default class App extends React.Component<Props> {
  render() {
    return (
      <div className="app-container">
        <div className="chat-list">
          <TopNav />
        </div>
        <div className="conversation-task" />
      </div>
    );
  }
}
