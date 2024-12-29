import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  private readonly BASE_URL = 'http://localhost:3000/api/v1';

  constructor(private http: HttpClient) {}

  uploadFile(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http
      .post(`${this.BASE_URL}/upload`, formData)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: any) {
    console.error('File upload error:', error);
    return throwError(error);
  }
}
