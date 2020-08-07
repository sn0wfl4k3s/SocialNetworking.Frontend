import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export abstract class CrudService<T> {

  constructor(
    protected http: HttpClient,
    protected url: string
  ) { }

  create = (model: T) => this.http.post<T | any>(this.url, model).toPromise();

  update = (id: number | string, model: T) => this.http.put<T | any>(`${this.url}/${id}`, model).toPromise();

  getById = (id: number | string) =>  this.http.get<T>(`${this.url}/${id}`).toPromise();

  getAll = () =>  this.http.get<Array<T>>(this.url).toPromise();

  delete = (id: number | string) =>  this.http.delete<T | any>(`${this.url}/${id}`).toPromise();

}
