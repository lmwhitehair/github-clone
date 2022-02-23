export class ProfilePagePersonalReposModel {
    repoName: string;
    repoDescription: string;

    constructor(repoName: string, repoDescription: string){
        this.repoName = repoName;
        this.repoDescription = repoDescription;
    }
}