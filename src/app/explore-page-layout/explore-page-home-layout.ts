import { Component } from "@angular/core";
import { ExplorePageLayoutComponent } from "./explore-page-layout.component";
import { mock_explore_page_recommended_repos_list } from "./mock-explore-page-recommended-repos-list";

@Component({
    selector: 'github-explore-home-layout',
    templateUrl: 'explore-page-home-layout.html',
    styleUrls: ['explore-page-home-layout.css']
})

export class ExplorePageHomeLayout {
    recommendedRepos: ExplorePageLayoutComponent[] = [];
    constructor(){
    for(var rpData of mock_explore_page_recommended_repos_list){
        this.recommendedRepos.push(rpData);
    }
}
}