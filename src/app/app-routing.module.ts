import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PullRequestsLayoutComponent } from './pull-requests-page/pull-requests-layout.component';
import { HomeLayoutComponent } from './homelayout/home-layout.component';

const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent
  },
  {
    path: 'pulls',
    component: PullRequestsLayoutComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
