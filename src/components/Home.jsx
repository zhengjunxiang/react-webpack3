import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import RaisedButton from 'material-ui/RaisedButton';

const url = require('../images/grid.png');

@inject('home') @observer
class Home extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const {fetchData} = this.props.home;
    fetchData();
  }

  renderResult() {
    const {data, state} = this.props.home;
    if (state === 0) {
      return '点击发送请求';
    } else if (state === 1) {
      return '正在请求';
    } else if (state === 2 && data != null) {
      return (data);
    } else if (state === -1) {
      return '请求出错';
    }
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
        <div className="webpack-logo" />
        <img src={url} alt="" />
        <RaisedButton label="fetchData" primary onClick={this.handleClick} />
        <h3>{this.renderResult()}</h3>
      </div>
    );
  }
}

export default Home;
