import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FrontpageCarouselComponent } from './components/frontpage-carousel/frontpage-carousel.component';
import { MyListComponent } from './components/my-list/my-list.component';
import { WatchMovieComponent } from './components/watch-movie/watch-movie.component';
import { WatchTVComponent } from './components/watch-tv/watch-tv.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { PosterCardComponent } from './components/poster-card/poster-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavBarComponent,
    FrontpageCarouselComponent,
    MyListComponent,
    WatchMovieComponent,
    WatchTVComponent,
    PosterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    YouTubePlayerModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [PosterCardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
