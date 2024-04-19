import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PexelApiService {

  APi_pexel_url: string = "https://api.pexels.com/v1/";
  API_Pexel_token: string = "6HHIsRw14mrxmKQuUROczjHp173MMA5x0Tlb5s14EB0a2zGlObnsf3tA";

  constructor(private httpClient: HttpClient ) { }

  getImagenes(): Observable<any>{
    const header = new HttpHeaders().set("Authorization",this.API_Pexel_token);
    return this.httpClient.get(this.APi_pexel_url,{
      headers:header
    }).pipe(res => res);
  }
}
