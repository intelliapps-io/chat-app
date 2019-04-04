// React
import * as React from "react";
import * as ReactDOM from "react-dom";
import './index.scss';

// Import App, which is the main react component
class App extends React.Component {
  render() {
    return (
      <div className="appbackground">
        This is basic react!
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("render-target"));