import {observable, action} from 'mobx';

class FetchDataStore {
  @observable data;
  @observable state;
  @action fetchData = () => {
    this.state = 1;
    const fetchURL = 'http://localhost:3001/';
    fetch(fetchURL, {method: 'get'})
      .then(res => res.json())
      .then(
        action('fetchOperate_success', (res) => {
          const {test} = res;
          window.setTimeout(() => {
            this.state = 2;
            this.data = test;
          }, 2000);
        })
      ).catch(
        action('fetchOperate_error', (err) => {
          this.data = typeof err === 'object' ? JSON.stringify(err) : err;
          this.state = -1;
        })
      );
  }
  constructor() {
    this.data = null;
    this.state = 0;
  }
}

const fetchData = new FetchDataStore();

export default fetchData;
