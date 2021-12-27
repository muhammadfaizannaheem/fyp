import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cv-display',
  templateUrl: './cv-display.component.html',
  styleUrls: ['./cv-display.component.css']
})
export class CvDisplayComponent implements OnInit {
  cv : any;
  constructor(private http: HttpClient) {
    this.http.get('https://localhost:44313/api/cv_records').subscribe(data => {
      this.cv = data
      console.log(data);
    })
  }

  ngOnInit(): void {
  }


getCvData()
{
  this.http.get('https://localhost:44313/api/cv_records').subscribe(data => {
      this.cv = data
      console.log(data);
    })
}

}
