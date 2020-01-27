import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const showsRoutes: Routes = [
  // TODO
  // { path: 'shows/:id', component: ShowDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(showsRoutes)],
  exports: [RouterModule]
})

export class ShowsRoutingModule {}
