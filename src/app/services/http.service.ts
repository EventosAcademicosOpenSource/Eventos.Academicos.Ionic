import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { EnvService } from './env.service';
import { LaravelPassportService } from 'laravel-passport';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  isLoggedIn = false;
  token: any;
  url: string;
  constructor(
    private http: HttpClient,
    private lpassport: LaravelPassportService
  ) {}
  register(fName: any, confirmPassword: any, email: any, password: any) {
    return this.http.post(EnvService.API_URL + 'api/register', {
      name: fName,
      email,
      password,
      confirmPassword,
    });
  }
  getEvents() {
    const headers = new HttpHeaders({
      Authorization:
        this.lpassport.getTokenType() + ' ' + this.lpassport.getAccessToken(),
    });
    this.builder('events');
    return this.http
      .get<any>(this.url, { headers })
      .pipe(
        tap(events => {
          return events;
        })
      );
  }

  getEvent(id: number) {
    this.builder('events');
    console.log(this.lpassport.isUserLoggedIn());
    const headers = new HttpHeaders({
      Authorization:
        this.lpassport.getTokenType() + ' ' + this.lpassport.getAccessToken(),
    });
    return this.http
      .get<any>(`${this.url}/${id}`, { headers })
      .pipe(
        tap(events => {
          return events;
        })
      );
  }
  postFirebaseBackend(token: any) {
    const headers = new HttpHeaders({
      Authorization:
        this.lpassport.getTokenType() + ' ' + this.lpassport.getAccessToken(),
    });
    this.builder('notification');
    return this.http.post(`${this.url}/${token}`, null, { headers });
  }
  postLikeEvent(id) {
    const headers = new HttpHeaders({
      Authorization:
        this.lpassport.getTokenType() + ' ' + this.lpassport.getAccessToken(),
    });
    this.builder('notification/event/set');
    return this.http.post(`${this.url}/${id}`, null, { headers });
  }
  postUnlikeEvent(id) {
    const headers = new HttpHeaders({
      Authorization:
        this.lpassport.getTokenType() + ' ' + this.lpassport.getAccessToken(),
    });
    this.builder('notification/event/unset');
    return this.http.post(`${this.url}/${id}`, null, { headers });
  }
  builder(resource: string) {
    this.url = EnvService.API_URL + 'api/' + resource;
    return this;
  }
}
