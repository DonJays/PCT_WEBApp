import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalquestionsService {

  constructor(private http: HttpClient) { }

  getPortalData(marshacode): Observable<any> {
    return this.http.get("../assets/data/portalgetdata.json");
  }
}
