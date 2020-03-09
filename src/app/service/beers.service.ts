import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  private apiUrl = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) {
  }

  getAllBeers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
