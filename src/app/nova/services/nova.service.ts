import { Injectable } from '@angular/core';
import { NovaApiService } from '../../services/nova-api.service';
import { Router } from '@angular/router';
import NovaApiError from '../../services/nova-api-error';

@Injectable({
  providedIn: 'root'
})
export class NovaService {
  constructor(
    private api: NovaApiService,
    private router: Router) { }

  public get(path: string) {
    try {
      return this.api.get(path);
    }
    catch(err) {
      return this.processError(err);
    }
  }
  public post(path: string, body: any) {
    try {
      return this.api.post(path, body);
    }
    catch(err) {
      return this.processError(err);
    }
  }
  public put(path: string, body: any) {
    try {
      return this.api.put(path, body);
    }
    catch(err) {
      return this.processError(err);
    }
  }
  public delete(path: string, body?: any) {
    try {
      return this.api.delete(path, body || null);
    }
    catch(err) {
      return this.processError(err);
    }
  }

  private processError(err: any) {
    if (err instanceof NovaApiError) {
      switch(err.error) {
        case "PLAYER_NOT_FOUND":
          return this.router.navigateByUrl('/nova/create-player');
        case "PLANET_DOES_NOT_BELONG_TO_PLAYER":
          // Propably user entered wrong planet ID in url, let's navigate to default overview
          return this.router.navigateByUrl('/nova/overview');
        case "UNAUTHORIZED":
          this.api.destroySession();
          return this.router.navigateByUrl('/login');
        case "INVALID_REQUEST":
          return alert("Error 400 - Invalid Request, try to refresh this page, if error will occur again, contant administrator.");
        default: throw err;
      }
    }
    else {
      alert("Unknown error, try to refresh this page. If error will occur again, contant administrator.");
    }
  }
}
