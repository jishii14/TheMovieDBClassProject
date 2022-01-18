import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private httpClient: HttpClient) { }

  getCurrentMovies() {
    let URL = "https://hw8jordanishii.wl.r.appspot.com/tmdb/currentmovies";
    return this.httpClient.get(URL);
  }
  getPopularMovies() {
    let URL = "https://hw8jordanishii.wl.r.appspot.com/tmdb/popularmovies";
    return this.httpClient.get(URL);
  }
  getTopRatedMovies() {
    let URL = "https://hw8jordanishii.wl.r.appspot.com/tmdb/topratedmovies";
    return this.httpClient.get(URL);
  }

  getPopularTV() {
    let URL = "https://hw8jordanishii.wl.r.appspot.com/tmdb/populartv";
    return this.httpClient.get(URL);
  }
  getTopRatedTV() {
    let URL = "https://hw8jordanishii.wl.r.appspot.com/tmdb/topratedtv";
    return this.httpClient.get(URL);
  }
  getTrendingTV() {
    let URL = "https://hw8jordanishii.wl.r.appspot.com/tmdb/trendingtv";
    return this.httpClient.get(URL);
  }
  getMovieVideos(id) {
    let URL = "https://hw8jordanishii.wl.r.appspot.com/tmdb/movievideo/" + id;
    return this.httpClient.get(URL);
  }
  getTVVideos(id) {
    let URL = "https://hw8jordanishii.wl.r.appspot.com/tmdb/tvvideo/" + id;
    return this.httpClient.get(URL);
  }
  getMovieDetails(id) {
    let URL = "https://hw8jordanishii.wl.r.appspot.com/tmdb/moviedetails/" + id;
    return this.httpClient.get(URL);
  }
  getTVDetails(id) {
    let URL = "https://hw8jordanishii.wl.r.appspot.com/tmdb/tvdetails/" + id;
    return this.httpClient.get(URL);
  }
}
