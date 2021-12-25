import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private http:HttpClient
  ) { }

  sendData(){
    let  cvData={
     b:'kjfhg',
     c:'kjfhg',

  }
this.http.post('url',cvData,{responseType:'json'}).subscribe(res=>{
  alert(res)
})
  }

  ngOnInit(): void {
  }

}
