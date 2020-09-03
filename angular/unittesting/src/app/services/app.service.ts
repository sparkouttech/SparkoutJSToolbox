import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private BASE_URL:string

  constructor(
    private httpClient:HttpClient
  ) {
    this.BASE_URL = 'http://jsonplaceholder.typicode.com/';
  }

  // Get all list
  public getAllList():Observable<any>{
    return this.httpClient.get(`${this.BASE_URL}posts`);
  }

  // New list post
  public postList(data):Observable<any>{
    return this.httpClient.post(`${this.BASE_URL}posts`,data);
  }
}
