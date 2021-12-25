import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Cv } from './cv.model';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CvAPIService } from '../cv-api.service';


@Component({
  selector: 'app-cv-maker',
  templateUrl: './cv-maker.component.html',
  styleUrls: ['./cv-maker.component.css']
})
export class CvMakerComponent implements OnInit {

  @ViewChild('content', {static: false}) el!: ElementRef<HTMLImageElement>;
  constructor(
    private newcv:CvAPIService
  ) {
    newcv.sendData()
  }

  ngOnInit(): void {
  }
   name : string ="";
   contact : string ="";
   address : string ="";
   objective : string ="";
   goals : string="";
   matricMarks : string="" ;
   intermediateMarks : string="";
   bachelors : string="";
   workExperience : string ="";
   imagePath : string="" ;
  cv : Cv = new Cv(
    this.name,this.contact,this.address,this.objective,this.goals,this.matricMarks,this.intermediateMarks,this.bachelors,this.workExperience,this.imagePath
  ) ;


  cvStatus = false;
  cvForm = true;
  onCvCreated()
  {
    this.cvForm=false;
    this.cvStatus=true;
  }

  makePDF(){

    html2canvas(this.el.nativeElement).then((canvas)=> {
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF({
        orientation: 'portrait',
      });
      const imageProps = pdf.getImageProperties(imgData);
      const pdfw = pdf.internal.pageSize.getWidth();
      const pdfh = (imageProps.height * pdfw)/imageProps.width;

      pdf.addImage(imgData,'PNG',0,0,pdfw,pdfh);
      pdf.save(this.name+'-Resume.pdf');
    })

  }
}
