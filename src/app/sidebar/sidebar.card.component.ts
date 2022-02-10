import { Component, Input } from "@angular/core";

@Component({
    selector: 'github-sidebar-card',
    templateUrl: 'sidebar.card.component.html',
    styleUrls: ['sidebar.card.component.css']
})

export class SidebarCardComponent {
    @Input() repoName: String;

    constructor() {
        this.repoName = "undefined";
    }
}