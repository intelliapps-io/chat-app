import * as React from 'react';


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
            <div key={index} className="messages">
              <div className="message-username">{message.senderId}</div>
              <div className="message-text">{message.parts[0].payload.content}</div>
            </div>
          );
        })}
      </div>
    )
  }
}

export default MessageList;