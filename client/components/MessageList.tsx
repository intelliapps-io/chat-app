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
          senderId: 'dom',
          text: 'sup fam'
        },
        {
          senderId: 'killah',
          text: 'I really mean it!'
        },
        {
          senderId: 'hero',
          text: 'get saved'
        }
      ]
    }
  }

  render() {
    return (
      <div className="message-list">
        {this.state.DUMMY_DATA.map((messages, index) => {
          return (
            <div className="messages">
              <div key={index}>{messages.senderId}</div>
              <div key={index}>{messages.text}</div>
            </div>
          );
        })}
      </div>
    )
  }
}

export default MessageList;