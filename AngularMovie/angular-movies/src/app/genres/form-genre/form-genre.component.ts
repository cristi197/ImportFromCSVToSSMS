import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUpperCase } from 'src/app/validators/firstLetterUpperCase';
import { EventEmitter } from '@angular/core';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  @Input()
  model:genreCreationDTO;

  form: FormGroup;

  @Output() //event emitter
  onSaveChanges: EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();  

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:['',{ //valoare default
        validators:[Validators.required, Validators.minLength(3), firstLetterUpperCase()] //validator (camp obligatoriu in acest caz), vector de validari per camp
      }]
    }); // cream obiectul cu toate field-urile pe care ni le dorim in form

    if(this.model !== undefined){
      this.form.patchValue(this.model); // insereaza valoarea catre obiectul model
    }
  }

  saveChanges(){
    // save the genres
    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMessageFieldName(){
    const field = this.form.get('name'); //preiau numele field-ului

    if(field.hasError('required')){
      return 'The name field is required';
    }

    if(field.hasError('minlength')){
      return 'The minimum length is 3';
    }

    if(field.hasError('firstLetterUpperCase')){
      return field.getError('firstLetterUpperCase').message; // apelarea metodei implementate pentru erori custom 
    }

    return '';
  }

}
