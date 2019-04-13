import * as React from 'react';
import Message from './Message';


export interface IMassage { //exported the massages state 
  senderId: string //senderId in api
  parts: [{//to obtain messages from api, how it is nested 
    payload: {// what was send
      content: string//actual message
    }
  }]
}
interface IProps { //messages property
  messages: IMassage[] //will contain senderId and content

}

class MessageList extends React.Component<IProps> {

  render() {
    return (
      <div className="message-list">
        {this.props.messages.map((message, index) => {//map the properties of the fetch data
          return (
            <Message key={index} username={message.senderId} content={message.parts[0].payload.content}/>
          );
        })}
      </div>
    )
  }
}

export default MessageList;