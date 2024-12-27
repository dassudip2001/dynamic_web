import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesT } from '../model/Hero';

@Injectable({
  providedIn: 'root',
})
export class OurServicesService {
  BASE_URL = 'http://localhost:3000/api/v1';

  constructor(private httpClient: HttpClient) {}

  get(): Observable<ServicesT[]> {
    return this.httpClient.get<ServicesT[]>(`${this.BASE_URL}/services`);
  }

  find(id: number) {
    return this.httpClient.get(`${this.BASE_URL}/services/${id}`);
  }

  create(service: ServicesT) {
    return this.httpClient.post(`${this.BASE_URL}/services`, service);
  }

  update(id: number, service: ServicesT) {
    return this.httpClient.put(`${this.BASE_URL}/services/${id}`, service);
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.BASE_URL}/services/${id}`);
  }
}
