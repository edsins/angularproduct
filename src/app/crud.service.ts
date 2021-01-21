import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
 
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
 
import { Product } from './product';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiServer = "http://localhost:54474/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiServer + '/products/')
    //.pipe(
      //catchError(this.errorHandler)
    //)
  }
  delete(id){
    return this.httpClient.delete<Product>(this.apiServer + '/products/' + id, this.httpOptions)
    //.pipe(
    //  catchError(this.errorHandler)
    //)
  }
  getById(id): Observable<Product> {
    return this.httpClient.get<Product>(this.apiServer + '/products/' + id)
    //.pipe(
     // catchError(this.errorHandler)
    //)
  } 
 
  update(id, product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiServer + '/products/' + id, JSON.stringify(product), this.httpOptions)
    //.pipe(
     // catchError(this.errorHandler)
    //)
  }
  add(product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiServer + '/products/', JSON.stringify(product), this.httpOptions)
  }

}
