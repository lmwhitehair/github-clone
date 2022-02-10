import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ActivityBarsComponent } from './header/activitybars/activity.bar.component';
import { TopBarComponent } from './header/topbar.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { PullRequestsLayoutComponent } from './pull-requests-page/pull-requests-layout.component';
import { HomeLayoutComponent } from './home-layout.component';
import { SidebarCardComponent } from './sidebar/sidebar.card.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent, 
    ActivityBarsComponent,
    FooterComponent,
    PullRequestsLayoutComponent,
    HomeLayoutComponent,
    SidebarCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
