import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  constructor(private http: HttpClient) {}
  API = 'http://coronavirus-19-api.herokuapp.com/countries';

  public getData() {
    return this.http.get(this.API, {});
  }
}
