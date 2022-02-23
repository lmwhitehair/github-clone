import { Component, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ExplorePageRecommendedReposModel } from "./explore-page-recommended-repos.model";
import { mock_explore_page_recommended_repos_list } from "./mock-explore-page-recommended-repos-list";

@Component({
    selector: 'github-explore-layout',
    templateUrl: 'explore-page-layout.component.html',
    styleUrls: ['explore-page-layout.component.css']
})

export class ExplorePageLayoutComponent {
    @Input() repoName: string;
    @Input() repoDescription: string;

    constructor(){
        this.repoName="undefined";
        this.repoDescription="No description";
    }
}