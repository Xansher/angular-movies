import { actorsMovieDTO } from "../actors/actors.model";
import { genreCreationDTO, genreDTO } from "../genres/genres.model";
import { movieTheatersDTO } from "../movie-theaters/movie-theaters.model";

export interface movieCreationDTO{
    title:string;
    summary: string;
    inTheaters: boolean,
    trailer: string;
    releaseDate: Date;
    poster:File;
    genresIds: number[];
    movieTheatersIds: number[];
    actors: actorsMovieDTO[];
}

export interface movieDTO{
    id:number;
    title:string;
    summary: string;
    inTheaters: boolean,
    trailer: string;
    releaseDate: Date;
    poster:string;
    genres: genreDTO[];
    movieTheaters: movieTheatersDTO[];
    actors: actorsMovieDTO[];
    averageVote: number;
    userVote: number;
}

export interface MoviePostGetDTO {
    genres: genreDTO[];
    movieTheaters:movieTheatersDTO[];
}

export interface homeDTO{
    inTheaters: movieDTO[];
    upcomingReleases: movieDTO[];
}

export interface MoviePutGetDTO{
    movie:movieDTO;
    selectedGenres: genreDTO[];
    nonSelectedGenres: genreDTO[];
    selectedMovieTheaters: movieTheatersDTO[];
    nonSelectedMovieTheaters: movieTheatersDTO[];
    actors: actorsMovieDTO[];
}