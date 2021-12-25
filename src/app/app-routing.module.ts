import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvMakerComponent } from './cv-maker/cv-maker.component';
import { HomeComponent } from './home/home.component';
import { IFinderComponent } from './i-finder/i-finder.component';
import { PracticeComponent } from './practice/practice.component';

const routes: Routes = [
  {
path:'',
redirectTo:'Home',
pathMatch:'full'
  },
  {
    path:'Home',
    component:HomeComponent,
  },
  {
    path:'makecv',
    component:CvMakerComponent
  },
  {
    path:'interestFinder',
    component: IFinderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const route=[
HomeComponent,

CvMakerComponent,
PracticeComponent,
]
