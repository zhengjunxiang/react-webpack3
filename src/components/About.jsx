import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import RaisedButton from 'material-ui/RaisedButton';
import DevTools from 'mobx-react-devtools';
import AboutCom from './AboutCom';

// import Loadable from 'react-loadable';
// import LoadingComponent from './LoadingComponent';

// const LoadableMyComponent = Loadable({
//   loader: () => import('./AboutCom'),
//   LoadingComponent,
//   delay: 300
// });

@inject('about') @observer
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCom: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({showCom: true});
  }

  render() {
    const {name, changeName} = this.props.about;
    return (
      <div>
        <h2>
          <i className="el-icon-caret-bottom" />
          Aboutas
        </h2>
        <RaisedButton label="Primary" primary onClick={this.handleClick} />
        {/* {this.state.showCom && <LoadableMyComponent />} */
          this.state.showCom && <AboutCom name="james" />
        }
        <input
          type="text"
          onChange={(e) => {
            changeName(e.target.value);
          }}
          />
        <p>{name}</p>
        <DevTools />
      </div>
    );
  }
}

export default About;
