import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MoviesFetchService {

  constructor(private httpClient: HttpClient) { }

  // getMovieDetails(): Observable<any>{
  //   return this.httpClient.get(`${environment.baseUrl}/movie/popular?.api_key=${environment.apiKey}`)
  // }
}
