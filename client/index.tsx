// React
import * as React from 'react';
import * as ReactDOM from 'react-dom';

//imported files
import './index.scss';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import SendMessageList from './components/SendMessageList';
import NewRoomForm from './components/NewRoomForm';


interface IState {
  
}

// Import App, which is the main react component
class App extends React.Component<{}, IState> {
  render() {
    return (
      <div className="main">
        <RoomList />
        <MessageList />
        <SendMessageList />
        <NewRoomForm/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("render-target"));