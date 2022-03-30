import { Component, OnInit } from '@angular/core';
import { ActivityBarModel } from '../activitybars/activity.bar.model';
import { GithubService } from '../github.service';

@Component({
  selector: 'github-add-activitybar',
  templateUrl: './add-activitybar.component.html',
  styleUrls: ['./add-activitybar.component.css']
})
export class AddActivitybarComponent implements OnInit {

  constructor(private gs: GithubService) { }

  ngOnInit(): void {
  }

  addActivityBar(activityBar: ActivityBarModel) {
    console.log("AddActivityBar")
    console.log(activityBar)
    this.gs.addActivityBar(activityBar)
  }

}
