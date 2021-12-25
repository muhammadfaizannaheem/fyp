import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fyp';
  constructor(
    private router:Router,
  ){

  }

  navigatepages(pName:string){
    this.router.navigate([pName])
  }
}
