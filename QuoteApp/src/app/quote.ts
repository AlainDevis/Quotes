export class Quote {
    showDetails: boolean;
    upVotes:number;
    downVotes:number;
    constructor(public id: number,public name: string,public author: string,public quote: string,public time:Date){
        this.showDetails=false;
        this.upVotes=0;
        this.downVotes=0;
      }
}
