import * as React from 'react';

interface IState {

}
class SendMessageForm extends React.Component<{}, IState> {
  render() {
    return (
      <div className="send-message">
        <form>
          <input
            type="text"
            placeholder="newMessageForm"/>
        </form>
      </div>
    )
  }
}

export default SendMessageForm;