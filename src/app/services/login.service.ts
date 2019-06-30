import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  login(username: string, password: string): Observable<boolean> {
    return of(username === "szczurek0908@xd.pl" && password === "kamilzabujca");
  }
  register(username: string, password: string): Observable<boolean> {
    return of(true);
  }
  logout(): Observable<void> {
    return of();
  }
}
