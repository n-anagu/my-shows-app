import { Component, OnInit } from '@angular/core';
import { Show } from '../models/show';
import { ShowsService } from '../shows.service';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.less'],
  providers: [ShowsService],
})

export class ShowsListComponent implements OnInit {
  shows: Array<Show>;
  faStar = faStar;

  constructor(private showsService: ShowsService) { }

  ngOnInit() {
    this.loadShowsList();
  }

  loadShowsList(): void {
    this.showsService.getShowsList().subscribe((shows) => {
      this.shows = shows;
    });
  }
}
