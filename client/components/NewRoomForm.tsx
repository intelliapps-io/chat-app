import * as React from 'react';

interface IState {

}

class NewRoomForm extends React.Component<{}, IState> {
  render() {
    return (
        <form className="new-room-form">
          <input
            type="text"
            placeholder="NewRoomForm"
            required
          />
          <button id="create-room-btn" type="submt">+</button>
        </form>
    )
  }
}
export default NewRoomForm;