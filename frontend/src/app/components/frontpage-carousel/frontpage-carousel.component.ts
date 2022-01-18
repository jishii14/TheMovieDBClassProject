import { Component, OnInit } from '@angular/core';
import {TmdbService} from '../../services/tmdb.service';

@Component({
  selector: 'app-frontpage-carousel',
  templateUrl: './frontpage-carousel.component.html',
  styleUrls: ['./frontpage-carousel.component.css']
})
export class FrontpageCarouselComponent implements OnInit {

  public currentMovies: any;
  public show: boolean=false;

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.fetchCurrentMovies();
  }

  fetchCurrentMovies() {
    this.tmdbService.getCurrentMovies().subscribe(res => {
      this.currentMovies = res;
    });
  }

  carouselhover(b: boolean) {
    this.show = b;
  }

}
