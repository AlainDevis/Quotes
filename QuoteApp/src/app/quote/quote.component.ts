import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1,"Alain Devis","Nelson Mandela","The greatest glory in living lies not in never falling, but in rising every time we fall"),
    new Quote(2,"Alain Devis","Walt Disney","The way to get started is to quit talking and begin doing"),
    new Quote(3,"Alain Devis","Eleanor Roosevelt","If life were predictable it would cease to be life, and be without flavor."),
    new Quote(4,"Alain Devis","John Lennon","Life is what happens when you're busy making other plans."),
    new Quote(5,"Alain Devis","James Cameron","If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."),
    new Quote(6,"Alain Devis","Mother Teresa","Spread love everywhere you go. Let no one ever come to you without leaving happier."),
    new Quote(7,"Alain Devis","Robert Louis Stevenson","Don't judge each day by the harvest you reap but by the seeds that you plant")
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }

  viewDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;

  }

  upVotesCount(index){
    this.quotes[index].upVotes = this.quotes[index].upVotes + 1;
  }

  downVotesCount(index){
    this.quotes[index].downVotes = this.quotes[index].downVotes - 1;
  }
  
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
