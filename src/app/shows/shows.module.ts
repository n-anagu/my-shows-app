import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ShowsListComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ShowsListComponent],
})

export class ShowsModule { }
