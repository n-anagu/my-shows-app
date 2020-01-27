import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Show } from './models/show';

@Injectable({
  providedIn: 'root'
})

export class ShowsService {
  private apiUrl = 'http://api.tvmaze.com/shows';

  constructor(private http: HttpClient) {}

  getShowsList(): Observable<Array<Show>> {
    return this.http.get(this.apiUrl).pipe(map((res: Array<Show>) => {
      return res;
    }));
  }
}
