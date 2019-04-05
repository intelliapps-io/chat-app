// React
import * as React from "react";
import * as ReactDOM from "react-dom";

//imported files
import './index.scss';
import Cookie from "js-cookie";
import UsernameForm from "./components/UsernameForm";


// Import App, which is the main react component
class App extends React.Component {
  render() {
    return (
      <div className="main">
        This is basic react!
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("render-target"));