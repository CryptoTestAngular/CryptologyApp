import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Crypto } from './crypto.model';


@Injectable()
export class RestService {

  baseUrl:string="http://localhost:3750/";

  constructor(private http:HttpClient) { }

  getCryptos(): Observable<Crypto[]> {
    return this.http.get<Crypto[]>(this.baseUrl + 'letters');
  }
}