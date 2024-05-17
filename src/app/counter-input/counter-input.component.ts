import { Component } from '@angular/core';
import {CounterService} from "../services/counter-service.service";

@Component({
  selector: 'app-counter-input',
  standalone: true,
  imports: [],
  templateUrl: './counter-input.component.html',
  styleUrl: './counter-input.component.scss'
})
export class CounterInputComponent {

  constructor(public counterService: CounterService) {
  }

  increment() {
    this.counterService.incrementCounter()

  }

  decrement() {
    this.counterService.decrementCounter();
  }
}
