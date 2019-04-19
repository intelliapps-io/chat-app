import * as React from 'react';

interface IState {
  message: string
}

class SendMessageForm extends React.Component<{}, IState> {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.message)
    this.setState({ message: '' });
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="send-message-form">
        <input
          value={this.state.message}
          onChange={event => this.setState({ message: event.target.value })}
          type="text"
          placeholder="Type message here"
        />
        <button>send</button>
      </form>
      
    )
  }
}

export default SendMessageForm;