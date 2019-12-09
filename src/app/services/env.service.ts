import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnvService {
  static API_URL = 'https://localhost';
  static API_URL_UPDATE_XML = 'https://localhost/api/update-app';
  static ClientSecret = '##hashclientsecretpassportlaravel###';
  static ClientId = 0;
}
