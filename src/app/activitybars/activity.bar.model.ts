export class ActivityBarModel {

    commitHash: string;
    commitDescription: string;
    user: string;
    repo: string;

    constructor(commitHash: string, commitDescription: string, user: string, repo: string){
        this.commitHash = commitHash;
        this.commitDescription = commitDescription;
        this.user = user;
        this.repo = repo; 
    }
}