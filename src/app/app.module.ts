import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ActivityBarsComponent } from './activitybars/activity.bar.component';
import { TopBarComponent } from './header/topbar.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { PullRequestsLayoutComponent } from './pull-requests-page-layout/pull-requests-layout.component';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { SidebarCardComponent } from './sidebar/sidebar.card.component';
import { MarketplacePageLayoutComponent } from './marketplace-page/marketplace-page-layout.component';
import { IssuesPageLayoutComponent } from './issues-page-layout/issues-page-layout.component';
import { ExplorePageLayoutComponent } from './explore-page-layout/explore-page-layout.component';
import { ExplorePageHomeLayout } from './explore-page-layout/explore-page-home-layout';
import { ProfilePageLayoutComponent } from './ProfilePage/profile-page-layout.component';
import { ProfilePageHomeLayoutComponent } from './ProfilePage/profile-page-home-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent, 
    ActivityBarsComponent,
    FooterComponent,
    PullRequestsLayoutComponent,
    HomeLayoutComponent,
    SidebarCardComponent,
    MarketplacePageLayoutComponent,
    IssuesPageLayoutComponent,
    ExplorePageLayoutComponent,
    ExplorePageHomeLayout,
    ProfilePageLayoutComponent,
    ProfilePageHomeLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
