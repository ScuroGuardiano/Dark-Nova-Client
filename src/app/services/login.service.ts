import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NovaApiService } from './nova-api.service';
import NovaApiError from './nova-api-error';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private api: NovaApiService) { }
  /**
   * Perfoms login action, if login is successful "OK" is returned,
   * otherwise error message is returned.
   * It will set api token automatically after successful login.
   */
  public async login(email: string, password: string): Promise<string> {
    try {
      const res = await this.api.post('/login', {
        email,
        password
      });
      if(res.token) {
        this.api.setApiToken(res.token);
        return "OK";
      }
    }
    catch(err) {
      if(err instanceof NovaApiError) {
        return err.error;
      }
      else {
        console.error(err);
        return "UKNOWN_ERROR";
      }
    }
  }
  register(username: string, password: string): Observable<boolean> {
    return of(true);
  }
  logout(): Observable<void> {
    return of();
  }
}
