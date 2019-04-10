import * as React from 'react';

interface IState {

}

class NewRoomForm extends React.Component<{}, IState> {
  render() {
    return (
      <div className="new-room-form">
        <form>
          <input
            type="text"
            placeholder="NewRoomForm"
            required
          />
          <button id="create-room-btn" type="submt">+</button>
        </form>
      </div>
    )
  }
}
export default NewRoomForm;