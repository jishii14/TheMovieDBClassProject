import { Component, OnInit } from '@angular/core';
import {TmdbService} from '../../services/tmdb.service';
import {PosterCardComponent} from '../poster-card/poster-card.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public popularMovies: any;
  public topRatedMovies: any;
  public topRatedTV: any;
  public popularTV: any;
  public trendingTV: any;

  constructor(private tmdbService: TmdbService, private posterCardComponent: PosterCardComponent) { }

  ngOnInit(): void {
    this.fetchPopularMovies();
    this.fetchTopRatedMovies();
    this.fetchPopularTV();
    this.fetchTopRatedTV();
    this.fetchTrendingTV();
  }

  fetchPopularMovies() {
    this.tmdbService.getPopularMovies().subscribe(res => {
      console.log(res);
      this.popularMovies = res;
    });
  }

  fetchTopRatedMovies() {
    this.tmdbService.getTopRatedMovies().subscribe(res => {
      this.topRatedMovies = res;
    });
  }

  fetchPopularTV() {
    this.tmdbService.getPopularTV().subscribe(res => {
      this.popularTV = res;
    });
  }

  fetchTopRatedTV() {
    this.tmdbService.getTopRatedTV().subscribe(res => {
      this.topRatedTV = res;
    });
  }

  fetchTrendingTV() {
    this.tmdbService.getTrendingTV().subscribe(res => {
      this.trendingTV = res;
    });
  }
}
