import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserInfoComponent } from './user-info/user-info.component';
import { ActivityBarsComponent } from './activitybars/activity.bar.component';
import { mock_activitybar_list } from './activitybars/mock-activitybar-list';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Github-clone';
  myInfo: UserInfoComponent | undefined;

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    console.log("sending get request");
    this.getUserInfo();
    this.showUserInfo();
  }

  getUserInfo(){
    return this.http.get<UserInfoComponent>("https://github-clone-68733-default-rtdb.firebaseio.com/myinfo.json")
  }

  showUserInfo(){
    this.getUserInfo().subscribe((data: UserInfoComponent) => {
      console.log(data); 
      this.myInfo = data;
    })

  }


}
