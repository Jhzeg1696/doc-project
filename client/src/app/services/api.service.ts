import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


 
@Injectable({ 
  providedIn: 'root' 
}) 
export class ApiService { 
 
 
  private REST_API_SERVER = "http://45.33.20.87:8000/"; 
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

  postTrckTypeRequest(url: string, canvas1: any, canvas2: any, canvas3: any, canvas4: any, 
    canvas5: any, canvas6: any, canvas7: any, canvas8: any, images: any) 
  {
    const data: FormData = new FormData();
    data.append('canvas1', JSON.stringify(canvas1)); 
    data.append('canvas2', JSON.stringify(canvas2));
    data.append('canvas3', JSON.stringify(canvas3));
    data.append('canvas4', JSON.stringify(canvas4));
    data.append('canvas5', JSON.stringify(canvas5));
    data.append('canvas6', JSON.stringify(canvas6));
    data.append('canvas7', JSON.stringify(canvas7));
    data.append('canvas8', JSON.stringify(canvas8));

    console.warn(images)
    for(let i = 0; i < images.length; i++)
    {
      console.warn(i);
      data.append('images', images[i])
    }
    /*
    images.forEach((element: any) => {   
      data.append('images'[counter], element);
      counter++
    });
    */
    //{headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')}
    
    return this.httpClient.post(this.REST_API_SERVER+url, data).pipe(map(res => { 
      return res; 
    })); 
    
  } 

  getPdfTrckTypeRequest(url: any) {
    return this.httpClient.get(this.REST_API_SERVER+url, { responseType: 'blob' }).pipe(
        map((resp: any) => {
            const downloadUrl = window.URL.createObjectURL(resp);
            window.open(downloadUrl);
        })
    )
  }
 
  putTypeRequest(url: any, payload: any) 
  {
    return this.httpClient.put(this.REST_API_SERVER+url, JSON.stringify(payload), {headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')}).pipe(map(res => { 
      return res; 
    })) 
  }
  
  
}