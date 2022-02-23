import { Component, Input } from "@angular/core";

@Component({
    selector: 'github-profile-page-layout',
    templateUrl: 'profile-page-layout.component.html',
    styleUrls: ['profile-page-layout.component.css']
})

export class ProfilePageLayoutComponent {
    @Input() repoName: string;
    @Input() repoDescription: string;

    constructor(){
        this.repoName="undefined";
        this.repoDescription="No description";
    }
}