import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, route } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvMakerComponent } from './cv-maker/cv-maker.component';
import { PracticeComponent } from './practice/practice.component';
import { HomeComponent } from './home/home.component';
import { IFinderComponent } from './i-finder/i-finder.component';

// http import
import { HttpClientModule } from '@angular/common/http';
import { CvDisplayComponent } from './cv-display/cv-display.component';

@NgModule({
  declarations: [
    AppComponent,
    route,
    IFinderComponent,
    CvDisplayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
