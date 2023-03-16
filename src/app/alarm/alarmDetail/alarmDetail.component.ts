import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarmDetail',
  templateUrl: './alarmDetail.component.html',
  styleUrls: ['./alarmDetail.component.css']
})
export class AlarmDetailComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  goLogin(): void {
    this.router.navigate(['/login'])
  }

}
