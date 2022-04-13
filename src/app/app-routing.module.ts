import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PullRequestsLayoutComponent } from './pull-requests-page-layout/pull-requests-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { IssuesPageLayoutComponent } from './issues-page-layout/issues-page-layout.component';
import { MarketplacePageLayoutComponent } from './marketplace-page/marketplace-page-layout.component';
import { ExplorePageLayoutComponent } from './explore-page-layout/explore-page-layout.component';
import { ProfilePageLayoutComponent } from './ProfilePage/profile-page-layout.component';
import { ExplorePageHomeLayout } from './explore-page-layout/explore-page-home-layout';
import { ProfilePageHomeLayoutComponent } from './ProfilePage/profile-page-home-layout.component';
import { AddActivitybarComponent } from './add-activitybar/add-activitybar.component';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

const routes: Routes = [
  {
    path: '', 
    component: HomeLayoutComponent
  },
  {
    path: 'pulls',
    component: PullRequestsLayoutComponent
  },
  {
    path: 'home',
    component: HomeLayoutComponent
  },
  {
    path: 'issues',
    component: IssuesPageLayoutComponent
  },
  {
    path: 'marketplace',
    component: MarketplacePageLayoutComponent
  },
  {
    path: 'explore',
    component: ExplorePageHomeLayout
  },
  {
    path: 'profile',
    component: ProfilePageHomeLayoutComponent
  },

  {
    path: 'admin',
    component: AddActivitybarComponent
  }, 

  {
    path: 'auth',
    component: AuthenticationComponent
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
