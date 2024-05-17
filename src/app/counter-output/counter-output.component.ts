import {Component, computed, OnInit} from '@angular/core';
import {CounterService} from "../services/counter-service.service";

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss'
})
export class CounterOutputComponent implements OnInit{
  activeCount = computed(() => this.counterService.counterSignal().counter);
  constructor(public counterService: CounterService) {}

  ngOnInit() {

  }

}
