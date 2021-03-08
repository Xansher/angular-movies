import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coordinatesMap } from 'src/app/utilities/map/coordinate';
import { movieTheatersCreationDTO, movieTheatersDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-form-movie-theater',
  templateUrl: './form-movie-theater.component.html',
  styleUrls: ['./form-movie-theater.component.css']
})
export class FormMovieTheaterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form:FormGroup

  @Input()
  model:movieTheatersDTO;

  @Output()
  onSaveChanges= new EventEmitter<movieTheatersCreationDTO>();

  initialCoordinates: coordinatesMap[]=[];

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      name:['',{
        validators: [Validators.required]
      }],
      longitude:['',{
        validators: [Validators.required]
      }],
      latitude:['',{
        validators: [Validators.required]
      }],
    })


    if(this.model !== undefined){
      this.form.patchValue(this.model);
      this.initialCoordinates.push({latitude: this.model.latitude, longitude: this.model.longitude});
    }
  }

  saveChanges(){
    this.onSaveChanges.emit(this.form.value);
  }
  onSelectedLocation(coords: coordinatesMap){
    this.form.patchValue(coords);
  }

}
