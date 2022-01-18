import { Component, OnInit } from '@angular/core';
import {TmdbService} from '../../services/tmdb.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  public show: boolean=false;
  public listings: any;
  public images = [];
  
  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    var ls = window.localStorage;
    if (ls.getItem("watchlist") != null) {
      this.show = true;
      this.listings = JSON.parse(ls.getItem("watchlist"));
      this.loadImages();
    } else {
      this.show = false;
    }
  }

  loadImages() {
    var cum = []
    for (var i = 0; i < this.listings.length; i++) {
      if (this.listings[i].type == "movie") {
        this.tmdbService.getMovieDetails(this.listings[i].id).subscribe(res => {
          this.images.push(res);
        });
      } else {
        this.tmdbService.getTVDetails(this.listings[i].id).subscribe(res => {
          this.images.push(res);
        });
      }
    }
    return cum;
  }
}
