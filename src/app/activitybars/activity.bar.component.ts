import { Component, Input } from "@angular/core";

@Component({
    selector: "github-activity-bar",
    templateUrl: "activity.bar.component.html",
    styleUrls: ["activity.bar.component.css"]
})

export class ActivityBarsComponent{
    @Input() commitHash: String;
    @Input() commitDescription: String;
    @Input() user: String;
    @Input() repo: String;


    constructor(){
        this.commitHash="XXXX";
        this.commitDescription="No Description";
        this.user="undefined";
        this.repo="undefined"
    }
}
