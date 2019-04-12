import * as React from 'react';

interface IState {

}
class SendMessageForm extends React.Component<{}, IState> {
  render() {
    return (
        <form className="send-message-form">
          <input
            type="text"
            placeholder="newMessageForm"/>
        </form>
    )
  }
}

export default SendMessageForm;