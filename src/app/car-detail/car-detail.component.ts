import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Car } from '../models/car.model';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  @Input() car: Car | undefined;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.loadCar();
  }

  loadCar(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getCars().subscribe(cars => {
      this.car = cars.find(car => car.id === id);
    });
  }

}
