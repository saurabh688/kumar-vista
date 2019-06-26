import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  private headers = new Headers({
    'Content-Type': 'application/json',
    'charset': 'UTF-8'
});
constructor(private http: HttpClient) { }


  retrieveByKey(retrive): Observable<any> {

    // return this.http.get(''+ retrive).pipe(map(res => res.json()));
    return this.http.post('',retrive).pipe(tap(res => {
      return res;
    }));
  }


}
