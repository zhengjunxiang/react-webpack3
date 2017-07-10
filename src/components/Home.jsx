import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import {Button} from 'antd';
import QueueAnim from 'rc-queue-anim';

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
    } else if (state === 2 && data !== null) {
      return (data);
    } else if (state === -1) {
      return '请求出错';
    }
  }

  render() {
    return (
      <div>
        <QueueAnim leaveReverse>
          <h2>Home</h2>
          <div className="webpack-logo" />
          <img src={url} alt="" />
          <div>
            <Button type="primary" onClick={this.handleClick}>fetchData</Button>
            <p>{this.renderResult()}</p>
          </div>
        </QueueAnim>
      </div>
    );
  }
}

export default Home;
