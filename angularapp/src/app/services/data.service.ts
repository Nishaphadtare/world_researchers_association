import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { InMemoryDbService} from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  addNew(data: any): Observable<any>{
    return this._http.post('http://localhost:4200/', data);

  }
  getList(): Observable<any>{
    return this._http.get('http://localhost:4200/');
  }
}
