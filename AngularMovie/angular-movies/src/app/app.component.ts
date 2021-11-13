import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit():void{
    this.moviesInTheaters= [{
      title: "Spider-Man",
      relesaseDate: new Date(),
      price:1400.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg'
    },
    {
      title: "Moana",
      relesaseDate: new Date('2016-11-04'),
      price:300.99,
      poster:'https://i.pinimg.com/originals/0b/aa/31/0baa317b04030e357d1bd687a52cfce9.jpg'
    },
    {
      title: "007",
      relesaseDate: new Date('2010-07-05'),
      price:140.01,
      poster:'https://m.media-amazon.com/images/M/MV5BMWZiNjE2OWItMTkwNy00ZWQzLWI0NTgtMWE0NjNiYTljN2Q1XkEyXkFqcGdeQXVyNzAwMjYxMzA@._V1_FMjpg_UX1000_.jpg'
    }
  ];
  this.moviesFutureReleases =[];
  }
 
  moviesInTheaters;
  moviesFutureReleases;
  title = "any title";

  duplicateNumber(n: number)
  {
    return n*2;
  }

  handleRating(rate: number){
    alert(`The user selected ${rate}`);
  }
}
