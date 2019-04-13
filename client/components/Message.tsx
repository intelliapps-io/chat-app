import * as React from 'react';


interface IState {
}

class Message extends React.Component<{}, IState> {
  
  render() {
    return (
      <div className="message">
        <div className="message-username">{this.props.username}</div>
        <div className="message-text">{this.props.content}</div>
      </div>
    )
  }

}
export default Message;