export class Quote {
    showDetails: boolean;
    upVotes:number;
    downVotes:number;
    constructor(public id: number,public name: string,public author: string,public quote: string){
        this.showDetails=false;
        this.upVotes=0;
        this.downVotes=0;
      }
}
