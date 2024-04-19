import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicacionesService {

  API_URL: string = "https://jsonplaceholder.typicode.com/posts";

  

  constructor(private httpClient: HttpClient) { }


  getPublicaciones(): Observable<any>{
    return this.httpClient.get(this.API_URL).pipe(res => res);
  }
}
