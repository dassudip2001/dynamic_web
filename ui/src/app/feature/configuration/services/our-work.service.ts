import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OurWorkT } from '../model/Hero';

@Injectable({
  providedIn: 'root',
})
export class OurWorkService {
  BASE_URL = 'http://localhost:3000/api/v1';

  constructor(private httpClient: HttpClient) {}

  get(): Observable<OurWorkT[]> {
    return this.httpClient.get<OurWorkT[]>(`${this.BASE_URL}/works`);
  }

  find(id: number) {
    return this.httpClient.get(`${this.BASE_URL}/works/${id}`);
  }

  create(work: OurWorkT) {
    return this.httpClient.post(`${this.BASE_URL}/works`, work);
  }

  update(id: number, work: OurWorkT) {
    return this.httpClient.put(`${this.BASE_URL}/works/${id}`, work);
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.BASE_URL}/works/${id}`);
  }
}
