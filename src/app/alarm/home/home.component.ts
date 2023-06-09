import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goLogin():void {
    this.router.navigate(['/login'])
  }

  goCreate(): void {
    this.router.navigate(['/alarm/create'])
  }

  goList(): void {
    this.router.navigate(['/alarm/list'])
  }

}
