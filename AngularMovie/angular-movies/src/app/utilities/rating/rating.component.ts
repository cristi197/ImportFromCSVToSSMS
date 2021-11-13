import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }


  @Input()
  maxRating = 5;
  @Input()
  selectedRate=0; 
  @Output()
  onRating: EventEmitter<number> = new EventEmitter<number>();
  previousRate = 0;
  maxRatingArray = [];

  ngOnInit(): void {
    this.maxRatingArray = Array(this.maxRating).fill(0);
  }

  handleMouseEnter(index:number){
  this.selectedRate = index+1;
  }
  //rate-ul ramane dupa click exact unde a fost pus, altfel se duce la 0
  handleMouseLeave(){
    if(this.previousRate !== 0){
      this.selectedRate = this.previousRate;
    }
    else{
      this.selectedRate = 0;  
    }
  }
  //cand se face click, se salveaza rate-ul primit
  rate(index:number) 
  {
    this.selectedRate = index+1;
    this.previousRate = this.selectedRate;
    this.onRating.emit(this.selectedRate); //event pentru a trimite de la copil la parinte
  }

}
