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
      price:1400.99
    },
    {
      title: "Moana",
      relesaseDate: new Date('2016-11-04'),
      price:300.99
    },
    {
      title: "007",
      relesaseDate: new Date('2010-07-05'),
      price:140.01
    }
  ];
  this.moviesFutureReleases =[
    {
      title: "Spider-Man",
      relesaseDate: new Date(),
      price:1400.99
    },
    {
      title: "Moana",
      relesaseDate: new Date('2016-11-04'),
      price:300.99
    },
    {
      title: "007",
      relesaseDate: new Date('2010-07-05'),
      price:140.01
    },
    {
      title: "Spider-Man",
      relesaseDate: new Date(),
      price:1400.99
    },
    {
      title: "Moana",
      relesaseDate: new Date('2016-11-04'),
      price:300.99
    },
    {
      title: "007",
      relesaseDate: new Date('2010-07-05'),
      price:140.01
    },
    {
      title: "Spider-Man",
      relesaseDate: new Date(),
      price:1400.99
    },
    {
      title: "Moana",
      relesaseDate: new Date('2016-11-04'),
      price:300.99
    },
    {
      title: "007",
      relesaseDate: new Date('2010-07-05'),
      price:140.01
    }
  ];
  }
 
  moviesInTheaters;
  moviesFutureReleases;
  title = "any title";

  duplicateNumber(n: number)
  {
    return n*2;
  }
}
