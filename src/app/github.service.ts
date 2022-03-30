
import { Injectable } from "@angular/core";
import { ActivityBarModel } from "./activitybars/activity.bar.model";
import { ExplorePageRecommendedReposModel } from "./explore-page-layout/explore-page-recommended-repos.model";
import { ProfilePagePersonalReposModel } from "./ProfilePage/profile-page-personal-repos.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable(
    {providedIn: 'root'}
)
export class GithubService {
  

    constructor(private db: AngularFireDatabase){

    }

    getActivityBar(){
        return this.db.list<ActivityBarModel>("activitybar").valueChanges();
    }

    getExplorePage(){
        return this.db.list<ExplorePageRecommendedReposModel>("explorepage").valueChanges();
    }

    getProfilePage() {
        return this.db.list<ProfilePagePersonalReposModel>("profilepage").valueChanges();
    }

    public addActivityBar(activityBar: ActivityBarModel){
        this.db.list<ActivityBarModel>("activitybar").push(activityBar);
    }
}