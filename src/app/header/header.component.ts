import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {CounterService} from "../services/counter-service.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public counterService: CounterService) {
  }


  reset() {
    this.counterService.reset();
  }
}
