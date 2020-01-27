import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowsListComponent } from './shows/shows-list/shows-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'shows' },
  { path: 'shows', component: ShowsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
