import {observable, action} from 'mobx';

class About {
  @observable name;
  @action changeName = (value) => {
    this.name = value;
  }

  constructor() {
    this.name = '';
  }
}

const AboutStore = new About();

export default AboutStore;
