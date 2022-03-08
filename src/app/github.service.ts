import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivityBarModel } from "./activitybars/activity.bar.model";
import { ExplorePageRecommendedReposModel } from "./explore-page-layout/explore-page-recommended-repos.model";
import { ProfilePagePersonalReposModel } from "./ProfilePage/profile-page-personal-repos.model";

@Injectable(
    {providedIn: 'root'}
)
export class GithubService {
    private baseUrl: string = "https://github-clone-68733-default-rtdb.firebaseio.com/";
    private activityBarEndpoint: string = "activitybar.json";
    private explorePageEndpoint: string = "explorepage.json";
    private profilePageEndpoint: string = "profilepage.json";
    private userInfo: string = "userinfo.json";

    constructor(private http: HttpClient){

    }

    getActivityBar(){
        return this.http.get<ActivityBarModel []>(this.baseUrl + this.activityBarEndpoint);
    }

    getExplorePage(){
        return this.http.get<ExplorePageRecommendedReposModel []>(this.baseUrl + this.explorePageEndpoint);
    }

    getProfilePage() {
        return this.http.get<ProfilePagePersonalReposModel []>(this.baseUrl + this.profilePageEndpoint);
    }
}