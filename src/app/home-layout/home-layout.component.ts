import { Component } from "@angular/core";
import { ActivityBarsComponent } from 'src/app/activitybars/activity.bar.component';
import { mock_activitybar_list } from 'src/app/activitybars/mock-activitybar-list';

@Component({
    selector: 'github-home-layout',
    templateUrl: 'home-layout.component.html'
})
export class HomeLayoutComponent {
    activityBars: ActivityBarsComponent[] = [];
    constructor(){
        for(var abData of mock_activitybar_list){
          this.activityBars.push(abData);
        }
      }
}