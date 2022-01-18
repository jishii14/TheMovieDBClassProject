import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poster-card',
  templateUrl: './poster-card.component.html',
  styleUrls: ['./poster-card.component.css']
})
export class PosterCardComponent implements OnInit {

  @Input() title: string;
  @Input() id: string;
  @Input() poster_path: string;
  @Input() is_movie = true;
  public link = "movie";
  public show: boolean=false;

  constructor() { }

  ngOnInit(): void {
    if (String(this.is_movie) == "false") {
      this.link = "tv";
    }
  }

  carouselhover(flag) {
    this.show = flag;
  }

}
