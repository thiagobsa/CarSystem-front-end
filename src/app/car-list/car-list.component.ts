import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars(): void {
    this.apiService.getCars().subscribe(cars => {
      this.cars = cars;
    });
  }

}
