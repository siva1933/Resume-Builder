import React from 'react';

export default class Languages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { laguages: [], lang: '' };
  }

  render() {
    return (
      <React.Fragment>
        <div className="ui text container">
          <h4 className="ui center aligned header">Languages</h4>
          <div className="ui segments">
            <div className="ui segment">
              <div class="ui checkbox">
                <input type="checkbox" name="lang1" value="English" />
                <label>English</label>
              </div>
              <div class="ui checkbox">
                <input type="checkbox" name="lang2" value="Hindi" />
                <label>Hindi</label>
              </div>
              <div className="ui input focus">
                <input type="text" placeholder="Other"></input>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}