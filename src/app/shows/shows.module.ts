import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsListComponent } from './shows-list/shows-list.component';

@NgModule({
  declarations: [ShowsListComponent],
  imports: [
    CommonModule
  ],
  exports: [ShowsListComponent],
})

export class ShowsModule { }
