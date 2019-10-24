import React, { Component } from 'react';
import './App.css';
import Pdf from './Pdf';
import ScreenCapture from './ScreenCapture';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenCapture: ''
    }
  }

  handleScreenCapture = (screenCapture) => {
    this.setState({
      screenCapture
    })
  }

  render() {
    const { screenCapture } = this.state

    return (
      <div className="App">
        <div>
          <a href='https://1v1-fe-project-qiniu.xueba100.com//test/sample.pdf' download>下载</a>
        </div>
        <ScreenCapture onEndCapture={ this.handleScreenCapture }>
          { ({ onStartCapture }) => (
            <React.Fragment>
              <div>
                <h2>Start editing to see more magic happen</h2>
              </div>
              <button onClick={ onStartCapture }>Capture</button>
              <div>Hello PDF</div>
              <Pdf/>
              <br/>
              <br/>
              <img src={ screenCapture }/>
            </React.Fragment>
          ) }
        </ScreenCapture>
      </div>
    );
  }
}

export default App;
