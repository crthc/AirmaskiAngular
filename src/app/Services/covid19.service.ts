import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Covid } from './covid';
import { CovidCountry } from './covid';

@Injectable({
  providedIn: 'root',
})
export class Covid19Service {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<Covid[]>('https://corona.lmao.ninja/v2/all?yesterday');
  }

  getCountry() {
    return this.http.get<CovidCountry[]>(
      'https://corona.lmao.ninja/v2/countries?yesterday&sort'
    );
  }
}
