import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


 
@Injectable({ 
  providedIn: 'root' 
}) 
export class ApiService { 
 
 
  private REST_API_SERVER = "http://localhost:8000/"; 
  constructor(private httpClient: HttpClient) { } 
 
  getTypeRequest(url: any) 
  { 
    return this.httpClient.get(this.REST_API_SERVER+url, {headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')}).pipe(map(res => { 
      return res; 
    })); 
  } 

  getPdfTypeRequest(url: any)
  {
    return this.httpClient.get(this.REST_API_SERVER+url, { responseType: 'blob' }).pipe(map(res => { 
      return res; 
    })); 
  }

  postTypeRequest(url: any,data: any) 
  {
    headers: new HttpHeaders().set('Content-Type', 'application/json')

    return this.httpClient.post(this.REST_API_SERVER+url, JSON.stringify(data), {headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')}).pipe(map(res => { 
      return res; 
    })); 
  } 
 
  putTypeRequest(url: any, payload: any) 
  {
    return this.httpClient.put(this.REST_API_SERVER+url, JSON.stringify(payload), {headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')}).pipe(map(res => { 
      return res; 
    })) 
  }
  
  
}