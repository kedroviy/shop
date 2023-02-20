import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  sessionId!: Observable<string>;
  token!: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.sessionId = this.route
      .queryParamMap
      .pipe(
        map(params => params.get('sessionId') || 'None')
      );
    
    this.token = this.route
      .fragment
      .pipe(
        map(fragment => fragment || 'None')
      );
  }

}
