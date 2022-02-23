import { Component } from "@angular/core";
import { mock_profile_page_personal_repos_list } from "./mock-profile-page-personal-repos-list";
import { ProfilePageLayoutComponent } from "./profile-page-layout.component";

@Component({
    selector: "github-profile-page-home-layout",
    templateUrl: "profile-page-home-layout.component.html",
    styleUrls: ["profile-page-home-layout.component.css"]
})

export class ProfilePageHomeLayoutComponent {
    personalRepos: ProfilePageLayoutComponent[] = [];

    constructor() {
        for(var pRData of mock_profile_page_personal_repos_list){
            this.personalRepos.push(pRData);
        }
    }


}