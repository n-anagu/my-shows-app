import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TruncateTextPipe } from '../truncate-text.pipe';

@NgModule({
  declarations: [ShowsListComponent, TruncateTextPipe],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [ShowsListComponent],
})

export class ShowsModule { }
