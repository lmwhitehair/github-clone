import { Component, Input } from "@angular/core";

@Component({
    selector: 'github-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css']
})

export class SideBarComponent {
    @Input() repoName: String;

    constructor(){
        this.repoName = "No name";
    }
}