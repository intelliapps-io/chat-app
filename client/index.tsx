// React
import * as React from 'react';
import * as ReactDOM from 'react-dom';

//imported files
import './index.scss';
import Chatkit from '@pusher/chatkit-client';
import RoomList from './components/RoomList';
import MessageList, { IMessage } from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import NewRoomForm from './components/NewRoomForm';
import { tokenUrl, instanceLocator } from './chatkit'

interface IState {
  roomId: string
  currentUser: any //set state of curent user
  messages: IMessage[] //state of messages
}

class App extends React.Component<{}, IState> {
  currentUser: any
  constructor(props) {
    super(props)
    this.state = {
      roomId: "20580718",
      currentUser: null,
      messages: [] // set to an empty array
    }
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'slick-Rick',
      tokenProvider: new Chatkit.TokenProvider({ url: tokenUrl })
    }) //after connection has been estiblished with api

    chatManager.connect().then(currentUser => {
      this.setState({ currentUser });
      currentUser.subscribeToRoom({
        roomId: this.state.roomId,
        hooks: {
          onMessage: (message: IMessage) => {
            let messages = this.state.messages
            messages.push(message);
            this.setState({ messages });
          }
        }
      })
    })
  }

  sendMessage(text: string) {
    const { roomId } = this.state
    this.state.currentUser.sendMessage({ text, roomId })
  }

  render() {
    const { currentUser, messages } = this.state;
    const isLoading = currentUser === null;
    if (isLoading) return (<h1>Loading...</h1>);
    return (
      <div className="main">
        <RoomList />
        <MessageList messages={messages} /> {/*how you pass down props to component*/}
        <SendMessageForm sendMessage={this.sendMessage.bind(this)} />
        <NewRoomForm />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("render-target"));
