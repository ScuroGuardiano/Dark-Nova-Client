import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import NovaApiResponse from '../interfaces/nova-api-response';
import NovaApiError from './nova-api-error';

@Injectable({
  providedIn: 'root'
})
export class NovaApiService {

  private API_ENDPOINT = "http://localhost:1337/api/v1";
  private apiToken: string;
  constructor(private http: HttpClient) { }
  public setApiToken(token: string) {
    this.apiToken = token;
  }

  /**
   * Sends GET request to nova api
   * @param path relative path to API_ENDPOINT
   */
  public async get(path: string): Promise<NovaApiResponse> {
    try {
      const headers = this.createHeaders();
      const response = await this.http.get<NovaApiResponse>(
        this.API_ENDPOINT + path, {
          headers,
          observe: "response"
        })
      .toPromise();
      return this.formatResponse(response);
    }
    catch(err) {
      console.error(err);
      if(err instanceof HttpErrorResponse) {
        if(err.error.error) {
          throw new NovaApiError(err.url, err.error.error, err.error.statusCode);
        }
      }
      throw err;
    }
  }

  /**
   * Sends POST request to nova Api
   * @param path relative path to API_ENDPOINT
   * @param body request body
   */
  public async post(path: string, body: any): Promise<NovaApiResponse> {
    try {
      const headers = this.createHeaders();
      const response = await this.http.post<NovaApiResponse>(
        this.API_ENDPOINT + path,
        body,
        { headers, observe: "response" }
      ).toPromise();
      return this.formatResponse(response);
    }
    catch(err) {
      console.error(err);
      if(err instanceof HttpErrorResponse) {
        if(err.error.error) {
          throw new NovaApiError(err.url, err.error.error, err.error.statusCode);
        }
      }
      throw err;
    }
  }

  /**
   * Sends PUT request to nova Api
   * @param path relative path to API_ENDPOINT
   * @param body request body
   */
  public async put(path: string, body: any): Promise<NovaApiResponse> {
    try {
      const headers = this.createHeaders();
      const response = await this.http.put<NovaApiResponse>(
        this.API_ENDPOINT + path,
        body,
        { headers, observe: "response" }
      ).toPromise();
      return this.formatResponse(response);
    }
    catch(err) {
      console.error(err);
      if (err instanceof HttpErrorResponse) {
        if (err.error.error) {
          throw new NovaApiError(err.url, err.error.error, err.error.statusCode);
        }
      }
      throw err;
    }
  }

  /**
   * Sends DELETE request to nova Api
   * @param path relative path to API_ENDPOINT
   */
  public async delete(path: string, body?: any): Promise<NovaApiResponse> {
    try {
      const headers = this.createHeaders();
      headers.append("Content-Type", "application/json");
      const response = await this.http.request<NovaApiResponse>(
        "DELETE",
        this.API_ENDPOINT + path,
        {
          headers,
          observe: "response",
          body: body || null
        }
      ).toPromise();
      return this.formatResponse(response);
    }
    catch(err) {
      console.log(err);
      if (err instanceof HttpErrorResponse) {
        if (err.error.error) {
          throw new NovaApiError(err.url, err.error.error, err.error.statusCode);
        }
      }
      throw err;
    }
  }

  public async destroySession(): Promise<void> {
    try {
      await this.delete('/auth/destroy-session', { token: this.apiToken });
      this.apiToken = null;
    }
    catch(err) {
      console.error(err);
    }
  }

  private createHeaders(): HttpHeaders {
    const headers = new HttpHeaders();
    if (this.apiToken) {
      headers.append("X-Nova-Token", this.apiToken);
    }
    return headers;
  }
  private formatResponse(fullResponse: HttpResponse<NovaApiResponse>): NovaApiResponse {
    const res = fullResponse.body || {};
    if(!res.statusCode) {
      res.statusCode = fullResponse.status;
    }
    return res;
  }
}
