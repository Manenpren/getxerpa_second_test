import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:8000/';

  constructor(private http: HttpClient) {}

  createCategory(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}apicategories/`, data);
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}apicategories/`);
  }

  getCategoryDetails(categoryId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}apicategories/${categoryId}/`);
  }

  createTransaction(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}apitransactions/`, data);
  }

  gettransactions(): Observable<any> {
    return this.http.get(`${this.baseUrl}apitransactions/`);
  }

  deleteCategory(categoryId: number): Observable<any> {
    const url = `${this.baseUrl}/apicategories/${categoryId}/`;
    return this.http.delete(url);
  }

  deleteTransaction(transactionId: number): Observable<any> {
    const url = `${this.baseUrl}/apitransactions/${transactionId}/`;
    return this.http.delete(url);
  }
}
