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
import { HttpClientModule } from '@angular/common/http';
import { UserInfoComponent } from './user-info/user-info.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideDatabase,getDatabase } from '@angular/fire/database'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AddActivitybarComponent } from './add-activitybar/add-activitybar.component';
import { FormsModule } from '@angular/forms';
import { GithubService } from './github.service';
import { AuthenticationComponent } from './auth/authentication/authentication.component';

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
    ProfilePageHomeLayoutComponent,
    UserInfoComponent,
    AddActivitybarComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }