import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  count =1;
  clickCounter = [
    0
  ];
  status = false;
  changeStatus(){
    if(this.status== true)
    {
      this.status=false;
    }
    else{
      this.status=true;
    }
    this.clickCounter.push(this.count++);
  }

}
