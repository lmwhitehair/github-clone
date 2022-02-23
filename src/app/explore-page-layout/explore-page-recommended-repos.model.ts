import { Component } from "@angular/core";

export class ExplorePageRecommendedReposModel {
    repoName: string;
    repoDescription: string;

    constructor(repoName: string, repoDescription: string){
        this.repoName = repoName;
        this.repoDescription = repoDescription;
    }
}