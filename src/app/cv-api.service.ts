import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvAPIService {

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

  //  this.http.put('https://brixback.herokuapp.com/users/' + mail, data).subscribe(resp => {
    // console.log(resp);

  // })
}
