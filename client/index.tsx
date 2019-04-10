// React
import * as React from 'react';
import * as ReactDOM from 'react-dom';

//imported files
import './index.scss';
import Chatkit from '@pusher/chatkit-client';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import SendMessageList from './components/SendMessageForm';
import NewRoomForm from './components/NewRoomForm';
import { tokenUrl, instanceLocator } from './chatkit';

interface IState {
  roomId: number
  currentUser: Object | null
}

// Import App, which is the main react component
class App extends React.Component<{}, IState> {
  constructor(props) {
    super(props)
    this.state = {
      roomId: 20272964,
      currentUser: null
    }
  }
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager ({
      instanceLocator,
      userId: 'slick-Rick',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })

    chatManager.connect().then(currentUser => {
      // console.log(currentUser);
      this.setState({ currentUser });
      // console.log(currentUser);
      currentUser.subscribeToRoom({
        roomId: this.state.roomId.toString(),
        hooks: {
          onNewMessage: message => {
            console.log('message.text: ', message.text);
          }
        }
      });

      currentUser.fetchMultipartMessages({
        roomId: this.state.roomId.toString()
      })
        .then(messages => {
          console.log(messages);
          // do something with the messages
        })
        .catch(err => {
          console.log(`Error fetching messages: ${err}`)
        })

    })

  }
  render() {
    const { currentUser } = this.state;
    const isLoading = currentUser === null;
    if (isLoading) return (<h1>Loading...</h1>);
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