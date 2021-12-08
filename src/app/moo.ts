import { hurz as bar_hurz } from './bar';
import { hurz as foo_hurz } from './foo';

const hurz = {
  answer: 42,
  foo: function () {
    return this.answer;
  },
  bar: () => {
    return this.answer;
  },
};

class User {
  public name: string;
  private age: number = 12;
  constructor(name: string) {
    this.name = name;
  }
}
const u = new User('ÖKJhyövjckha');
