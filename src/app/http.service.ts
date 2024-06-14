import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  
import { IEmployee } from './Interfaces/Employee';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl = "https://localhost:7116";
  
  constructor(private http: HttpClient) { }
  
  getAllEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.apiUrl + "/api/Employee");
  }
}
