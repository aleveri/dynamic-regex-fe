import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://localhost:7238/';

  getData(input: string, regex: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}api/RegexGenerator?input=${input}&regex=${regex}`);
  }

  postData(data: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}api/RegexGenerator`, data);
  }
}
