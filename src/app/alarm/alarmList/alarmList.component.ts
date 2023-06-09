import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarmList',
  templateUrl: './alarmList.component.html',
  styleUrls: ['./alarmList.component.css']
})
export class AlarmListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goLogin(): void {
    this.router.navigate(['/login']);
  }

  goHome(): void {
    this.router.navigate(['/home'])
  }

  goEdit(): void {
    this.router.navigate(['alarm/edit'])
  }

}
