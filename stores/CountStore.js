// @src/store/count.store
import { makeAutoObservable } from 'mobx';

class Count {
  number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increase = () => {
    this.number += 1;
  };

  decrease = () => {
    this.number -= 1;
  };
}

const CountStore = new Count();
export default CountStore;
