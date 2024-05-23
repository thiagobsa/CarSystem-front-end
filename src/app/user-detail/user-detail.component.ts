import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apiService.getUsers().subscribe(users => {
      this.user = users.find(user => user.id === id);
    });
  }

}
