import { Component, OnInit } from "@angular/core";
import { ActivityBarsComponent } from 'src/app/activitybars/activity.bar.component';
import { ActivityBarModel } from "../activitybars/activity.bar.model";
import { GithubService } from "../github.service";

@Component({
    selector: 'github-home-layout',
    templateUrl: 'home-layout.component.html'
})
export class HomeLayoutComponent implements OnInit{
    activityBars: ActivityBarsComponent[] = [];
    constructor(private activityBarData: GithubService){
       
      }

      ngOnInit(): void {
        this.activityBarData.getActivityBar().subscribe((data: ActivityBarModel []) => {
          console.log("Fetching data");
          for(var activityData of data){
            console.log(activityData);
            this.activityBars.push(activityData);
          }
        });
      }
}