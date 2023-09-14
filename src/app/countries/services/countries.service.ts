import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../interfaces/country';
import { Observable, catchError, of } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCapital( term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`)
    .pipe(
      catchError( () => of([]))
    );
  }

  searchCountry( term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${term}`)
    .pipe(
      catchError( () => of([]))
    );
  }

  searchRegion( term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/region/${term}`)
    .pipe(
      catchError( () => of([]))
    );
  }

  searchCountryAlphaCode( id: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${id}`)
    .pipe(
      catchError( () => of([]))
    );
  }



}
