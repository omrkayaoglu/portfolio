import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public url = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  getExperience():Observable<any>{
    return this.http.get<any>(this.url+"/experiences")
  }

  getProjects():Observable<any>{
    return this.http.get<any>(this.url+"/projects")
  }
}
