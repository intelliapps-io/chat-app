import * as React from 'react';

interface IProps {// props needed for typescipt
  username: string
  content: string
}

export const Message: React.FunctionComponent<IProps> = (props) => { //turned component in to a functional component
  return (
    <div className="message">
      <div className="message-username">{props.username}</div>
      <div className="message-text">{props.content}</div>
    </div>

  )
}

export default Message;