import * as React from 'react';

interface IState {
  DUMMY_DATA: object[]

}

class MessageList extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      DUMMY_DATA: [
        {
          senderId: 'DomCharm',
          text: 'sup fam'
        },
        {
          senderId: 'KillahCam',
          text: 'I really mean it!'
        },
        {
          senderId: 'Hero_Nakamorro',
          text: 'check out my pet blunt'
        }
      ]
    }
  }

  render() {
    return (
      <div className="message-list">
        {this.state.DUMMY_DATA.map((message, index) => {
          return (
            <div key={index} className="messages">
              <div className="message-username">{message.senderId}</div>
              <div className="message-text">{message.text}</div>
            </div>
          );
        })}
      </div>
    )
  }
}

export default MessageList;