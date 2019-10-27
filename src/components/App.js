import React from 'react';
import '../styles/App.css';
import Routes from './routes';
import { withRouter } from 'react-router-dom'

class App extends React.Component {
  state = {
    showButton: true
  }

  componentDidMount() {
    if (localStorage.getItem('showButton') !== null) {
      this.setState({
        showButton: JSON.parse(localStorage.getItem('showButton'))
      })
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="ui container">
          <h3 className="ui center aligned header">Resume Builder</h3>
          {this.state.showButton && <button onClick={() => {
            this.setState({
              showButton: false
            })
            localStorage.setItem('showButton', false)
            this.props.history.push('/personal')
          }} className="ui primary button">Enter your details</button>}
          {Routes}
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(App)
