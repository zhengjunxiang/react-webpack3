import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import {Button} from 'antd';
import AboutCom from './AboutCom';

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
        <Button type="primary" onClick={this.handleClick}>Primary</Button>
        {this.state.showCom && <AboutCom name="james" />}
        <input
          type="text"
          onChange={(e) => {
            changeName(e.target.value);
          }}
          />
        <p>{name}</p>
      </div>
    );
  }
}

export default About;
