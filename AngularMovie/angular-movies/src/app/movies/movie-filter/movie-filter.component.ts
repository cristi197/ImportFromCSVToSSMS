import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  genres = [{id:1, name: 'Drama'},{id:2, name:'Action'}];

  //take a movies array to test our filter
  movies = [
    {title:'Spider-Man', poster: 'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg'} ,
    {title:'Moana', poster: 'https://i.pinimg.com/originals/0b/aa/31/0baa317b04030e357d1bd687a52cfce9.jpg'} ,
    {title:'007', poster: 'https://m.media-amazon.com/images/M/MV5BMWZiNjE2OWItMTkwNy00ZWQzLWI0NTgtMWE0NjNiYTljN2Q1XkEyXkFqcGdeQXVyNzAwMjYxMzA@._V1_FMjpg_UX1000_.jpg'} 
];

  originalMovies = this.movies;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title:'',
      genreId:0,
      upcomingReleases: false,
      inTheaters: false 
    });


    this.form.valueChanges //values of the form from above
      .subscribe(values =>{
        this.movies = this.originalMovies;
        this.filterMovies(values);
      });
  }

  filterMovies(values: any){ 
    if(values.title){ //sort by title
      this.movies = this.movies.filter(movie => movie.title.indexOf(values.title) !== -1)
    }
  }

  clearForm(){
    this.form.reset();
  }

}
