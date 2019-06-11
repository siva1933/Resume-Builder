import React from 'react';

export default class Hobbies extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hobbies: [], hobbiesObj: '' };
  }

  render() {
    return (
      <React.Fragment>
        <div className="ui text container">
          <h4 className="ui center aligned header">Hobbies and Interests</h4>
          <div className="ui segments">
            {this.state.hobbies && this.state.hobbies.length ? <div>
              {this.state.hobbies.map((item) => (
                <div>
                  {item}
                </div>
              ))}
            </div> : ''}
            <div className="ui segment">
              <div class="ui input focus">
                <input type="text" placeholder="Enter hobies" onChange={(e) => {
                  this.setState({
                    hobbiesObj: e.target.value
                  })
                }}></input>
              </div>
            </div>
            <div className="ui segment">
              <button className="ui primary button" onClick={() => {
                let edu = [...this.state.hobbies, this.state.hobbiesObj]
                this.setState({ hobbies: edu, hobbiesObj: {} }, () => this.props.setParentState('hobbies', this.state.hobbies))

              }} >Add</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}