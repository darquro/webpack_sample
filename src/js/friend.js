import Person from 'js/person';

class Friend extends Person {
  constructor(name) {
    super();
    this.name = name;
  }
  callName() {
    alert(`This is ${this.name}`);
  }
  getName() {
    return `This is ${this.name}`;
  }
}

export default Friend;
