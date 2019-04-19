// React
import * as React from 'react';
import * as ReactDOM from 'react-dom';

//imported files
import './index.scss';
import Chatkit from '@pusher/chatkit-client';
import RoomList from './components/RoomList';
import MessageList, {IMassage} from './components/MessageList';
import SendMessageList from './components/SendMessageForm';
import NewRoomForm from './components/NewRoomForm';
import { tokenUrl, instanceLocator } from './chatkit'

interface IState {
  roomId: number
  currentUser: Object | null //set state of curent user
  messages: IMassage[] //state of messages
}
//State is private to a component
//props is is not provate and is shared between compoents
// Import App, which is the main react component
class App extends React.Component<{}, IState> {
  constructor(props) {
    super(props)
    this.state = {
      roomId: 20580718,
      currentUser: null,
      messages: []// set to an empty array
    }
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager ({
      instanceLocator,
      userId: 'slick-Rick',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    })//after connection has been estiblished with api

    chatManager.connect().then(currentUser => {
      this.setState({ currentUser });
      currentUser.subscribeToRoom({
        roomId: this.state.roomId.toString(),
        hooks: {
          onNewMessage: message => {

          }
        }
      });

      currentUser.fetchMultipartMessages({
        roomId: this.state.roomId.toString(),
      })
        .then(messages => {
          console.log(messages)
          this.setState({ messages });
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
        <MessageList messages={this.state.messages}/> 
        <SendMessageList />
        <NewRoomForm/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("render-target"));