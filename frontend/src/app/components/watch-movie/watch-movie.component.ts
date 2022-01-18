import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TmdbService} from '../../services/tmdb.service';

@Component({
  selector: 'app-watch-movie',
  templateUrl: './watch-movie.component.html',
  styleUrls: ['./watch-movie.component.css'],
})
export class WatchMovieComponent implements OnInit {

  public videos: any;
  public details: any;

  constructor(private route: ActivatedRoute, private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.fetchMovieVideos();
    this.fetchMovieDetails();
  }

  fetchMovieVideos() {
    this.tmdbService.getMovieVideos(this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.videos = res;
    });
  }

  fetchMovieDetails() {
    this.tmdbService.getMovieDetails(this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.details = res;
    });
  }

  watch() {
    var ls = window.localStorage;
    if (ls.getItem("watchlist") != null) {
      var safestring = ls.getItem("watchlist").replace("[object Object],", "");
      console.log(safestring);
      if(safestring.charAt(0) != '[') {
        safestring = "[" + safestring + "]";
      }
      var arr = JSON.parse(safestring);
      var cur = { id: parseInt(this.route.snapshot.paramMap.get('id')), type: "movie"};
      var newarray = arr.filter(function(c) { return c.id != cur.id});
      console.log(newarray);
      newarray.push(cur);
      ls.setItem("watchlist", JSON.stringify(newarray));
    } else {
      var temp = parseInt(this.route.snapshot.paramMap.get('id'));
      ls.setItem("watchlist", JSON.stringify({id: temp, type: "movie"}));
    }
  }
}
