import { Component } from '@angular/core';
import { ActivityBarsComponent } from './activitybars/activity.bar.component';
import { mock_activitybar_list } from './activitybars/mock-activitybar-list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github-clone';
}
