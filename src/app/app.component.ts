import { Component } from '@angular/core';
import { Car } from './models/car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  car: Car | undefined = {
    id: 1,
    model: 'Example Model',
    year: 2022,
    color: 'Red',
    licensePlate: ''
  };
}
