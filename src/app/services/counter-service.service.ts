import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counterSignal = signal<{counter: number}>({counter: 0});

  reset() {
    this.counterSignal.set({counter: 0});
  }

  incrementCounter() {
    this.counterSignal.update((countObj) => {
      return {...countObj, counter: countObj.counter + 1 };
    })
  }

  decrementCounter(){
    this.counterSignal.update((countObj)=>{
      return {...countObj, counter: countObj.counter - 1 };
    })
  }
}
