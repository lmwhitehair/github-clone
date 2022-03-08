import { Component } from "@angular/core";
import { GithubService } from "../github.service";
import { ExplorePageLayoutComponent } from "./explore-page-layout.component";
import { ExplorePageRecommendedReposModel } from "./explore-page-recommended-repos.model";
import { mock_explore_page_recommended_repos_list } from "./mock-explore-page-recommended-repos-list";

@Component({
    selector: 'github-explore-home-layout',
    templateUrl: 'explore-page-home-layout.html',
    styleUrls: ['explore-page-home-layout.css']
})

export class ExplorePageHomeLayout {
    recommendedRepos: ExplorePageLayoutComponent[] = [];
    constructor(private explorePageData: GithubService){
    }

    ngOnInit(): void {
        this.explorePageData.getExplorePage().subscribe((data: ExplorePageRecommendedReposModel []) => {
            for(var exploreData of data){
                this.recommendedRepos.push(exploreData);
            }
        })
    }
}