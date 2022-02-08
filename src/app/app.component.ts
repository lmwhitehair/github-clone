import { Component } from '@angular/core';
import { ActivityBarsComponent } from './header/activitybars/activity.bar.component';
import { mock_activitybar_list } from './header/activitybars/mock-activitybar-list';
import { SideBarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github-clone';
  activityBars: ActivityBarsComponent[] = [];
  sideBars: SideBarComponent[] = [];

  constructor(){
    for(var abData of mock_activitybar_list){
      this.activityBars.push(abData);
    }
  }
}
