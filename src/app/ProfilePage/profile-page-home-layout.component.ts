import { Component } from "@angular/core";
import { GithubService } from "../github.service";
import { mock_profile_page_personal_repos_list } from "./mock-profile-page-personal-repos-list";
import { ProfilePageLayoutComponent } from "./profile-page-layout.component";
import { ProfilePagePersonalReposModel } from "./profile-page-personal-repos.model";

@Component({
    selector: "github-profile-page-home-layout",
    templateUrl: "profile-page-home-layout.component.html",
    styleUrls: ["profile-page-home-layout.component.css"]
})

export class ProfilePageHomeLayoutComponent {
    personalRepos: ProfilePageLayoutComponent[] = [];

    constructor(private profileData: GithubService) {
    
    }

    ngOnInit(): void {
        this.profileData.getProfilePage().subscribe((data: ProfilePagePersonalReposModel []) => {
            for(var profileData of data){
                this.personalRepos.push(profileData);
            }
        })
    }


}