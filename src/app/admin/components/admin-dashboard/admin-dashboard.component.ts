import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, BehaviorSubject } from 'rxjs';


import { AppSettings } from 'src/app/core/models/app-settings.model';
import { AppSettingsService } from 'src/app/core/services/app-settings.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  sessionId!: Observable<string>;
  refreshAdminName$ = new BehaviorSubject<boolean>(true);
  token!: Observable<string>;
  adminName$!: Observable<AppSettings | null>;

  constructor(private route: ActivatedRoute, private appSettingsService: AppSettingsService) { }

  ngOnInit(): void {
    this.appSettingsService.getAppSettings('adminName').subscribe(value => value ? this.adminName$ = value.key.name : null);

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
