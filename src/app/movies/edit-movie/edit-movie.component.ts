import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { actorsMovieDTO } from 'src/app/actors/actors.model';
import { coordinatesMap } from 'src/app/utilities/map/coordinate';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { movieCreationDTO, movieDTO } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private moviesService:MoviesService,
    private router: Router) { }

  model: movieDTO;
  nonSelectedGenres: multipleSelectorModel[];
  selectedGenres: multipleSelectorModel[];
  
  nonSelectedMovieTheaters: multipleSelectorModel[];
  selectedMovieTheaters: multipleSelectorModel[];

  selectedActors: actorsMovieDTO[];
  
  //coordinates: coordinatesMapWithMessage[]=[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.moviesService.putGet(params.id).subscribe( moviePutGetDTO => {
        
        this.model= moviePutGetDTO.movie;

        this.nonSelectedGenres=moviePutGetDTO.nonSelectedGenres.map( genre => {
          return <multipleSelectorModel>{key: genre.id, value:genre.name}
        });
        this.selectedGenres=moviePutGetDTO.selectedGenres.map( genre => {
          return <multipleSelectorModel>{key: genre.id, value:genre.name}
        });

        this.nonSelectedMovieTheaters=moviePutGetDTO.nonSelectedMovieTheaters.map( genre => {
          return <multipleSelectorModel>{key: genre.id, value:genre.name}
        });
        this.selectedMovieTheaters=moviePutGetDTO.selectedMovieTheaters.map( genre => {
          return <multipleSelectorModel>{key: genre.id, value:genre.name}
        });

        this.selectedActors=moviePutGetDTO.actors;

      } );
    })
  }
  
  saveChanges( movieCreationDTO:movieCreationDTO){
    this.moviesService.edit(this.model.id, movieCreationDTO).subscribe(()=>{
      this.router.navigate(['/movie/'+ this.model.id]);
    });
  }
}
