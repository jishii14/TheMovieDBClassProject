import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TmdbService} from '../../services/tmdb.service';

@Component({
  selector: 'app-watch-tv',
  templateUrl: './watch-tv.component.html',
  styleUrls: ['./watch-tv.component.css'],
})
export class WatchTVComponent implements OnInit {

  public videos: any;
  public details: any;

  constructor(private route: ActivatedRoute, private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.fetchTVVideos();
    this.fetchTVDetails();
  }

  fetchTVVideos() {
    this.tmdbService.getTVVideos(this.route.snapshot.paramMap.get('id')).subscribe(res => {
      console.log(res);
      this.videos = res;
    });
  }

  fetchTVDetails() {
    this.tmdbService.getTVDetails(this.route.snapshot.paramMap.get('id')).subscribe(res => {
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
      var cur = { id: parseInt(this.route.snapshot.paramMap.get('id')), type: "tv"};
      var newarray = arr.filter(function(c) { return c.id != cur.id});
      console.log(newarray);
      newarray.push(cur);
      ls.setItem("watchlist", JSON.stringify(newarray));
    } else {
      var temp = parseInt(this.route.snapshot.paramMap.get('id'));
      ls.setItem("watchlist", JSON.stringify({id: temp, type: "tv"}));
    }
  }
}