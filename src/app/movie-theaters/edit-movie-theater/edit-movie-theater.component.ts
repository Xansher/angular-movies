import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { movieTheatersCreationDTO, movieTheatersDTO } from '../movie-theaters.model';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css']
})
export class EditMovieTheaterComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private movieTheatersService:MovieTheatersService, private router: Router) { }

  
  model:movieTheatersDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.movieTheatersService.getById(params.id).subscribe(movieTheater => this.model=movieTheater);
    })
  }

  saveChanges(movieTheaters:movieTheatersCreationDTO){
    this.movieTheatersService.edit(this.model.id, movieTheaters).subscribe(() => {
      this.router.navigate(['/movietheaters']);
    })
  }

}
