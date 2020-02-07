import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevArticlesComponent } from './dev-articles/dev-articles.component';
import { MusicArticlesComponent } from './music-articles/music-articles.component';


const routes: Routes = [
  {path: '', component: MusicArticlesComponent},
  {path: 'dev', component: DevArticlesComponent},
  {path: 'music', component: MusicArticlesComponent},
  {path: '**', component: DevArticlesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
