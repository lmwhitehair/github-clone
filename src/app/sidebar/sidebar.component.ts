import { Component, Input } from "@angular/core";
import { mock_sidebar_card_list } from './mock-sidebar-card-list';
import { SidebarCardComponent } from './sidebar.card.component';

@Component({
    selector: 'github-sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css']
})

export class SideBarComponent {
    @Input() repoName: String;
    sideBars: SidebarCardComponent[] =[];

    constructor(){
        this.repoName = "No name";

        for(var sbData of mock_sidebar_card_list){
            this.sideBars.push(sbData);
          }
    }
}