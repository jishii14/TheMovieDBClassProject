import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MyListComponent } from './components/my-list/my-list.component';
import { WatchMovieComponent } from './components/watch-movie/watch-movie.component';
import { WatchTVComponent } from './components/watch-tv/watch-tv.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'watch', 
    // component: FirstpageComponent
    children: [
      { path: "movie", children: [{path:":id", component: WatchMovieComponent}] },
      { path: "tv", children: [{path:":id", component: WatchTVComponent}] }
    ]
  },
  {path: 'mylist', component: MyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
