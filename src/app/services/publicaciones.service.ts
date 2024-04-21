import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  API_URL: string = "https://jsonplaceholder.typicode.com/";

  

  constructor(private httpClient: HttpClient) { }


  getPublicaciones(): Observable<any>{
    return this.httpClient.get(this.API_URL+"posts").pipe(res => res);
  }

  getUsers(): Observable<any>{
    return this.httpClient.get(this.API_URL+"users").pipe(res => res);
  }

  
}
