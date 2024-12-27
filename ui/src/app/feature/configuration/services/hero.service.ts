import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroT } from '../model/Hero';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  BASE_URL = 'http://localhost:3000/api/v1';

  constructor(private httpClient: HttpClient) {}

  get(): Observable<HeroT[]> {
    return this.httpClient.get<HeroT[]>(`${this.BASE_URL}/hero`);
  }

  find(id: number) {
    return this.httpClient.get(`${this.BASE_URL}/hero/${id}`);
  }

  create(hero: HeroT) {
    return this.httpClient.post(`${this.BASE_URL}/hero`, hero);
  }

  update(id: number, hero: HeroT) {
    return this.httpClient.put(`${this.BASE_URL}/hero/${id}`, hero);
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.BASE_URL}/hero/${id}`);
  }
}
