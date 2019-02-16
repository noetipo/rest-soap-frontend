import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IResponse} from '../utils';
import { Observable } from 'rxjs';

@Injectable()
export class ServicesService {
    url = 'http://192.168.1.100:9000/api/consulta_pagos';
    constructor(private http: HttpClient) {
    }

    public get$(filters?): Observable<IResponse> {
        return this.http.get<IResponse>(this.url, {params: filters});
    }
    public getById$(id): Observable<IResponse> {
        return this.http.get<IResponse>(`${this.url}/${id}`);
    }

    public post$(data): Observable<IResponse> {
        return this.http.post<IResponse>(this.url, data);
    }
    public update$(id, data): Observable<IResponse> {
        return this.http.put<IResponse>(`${this.url}/${id}`, data);
    }
    public delete$(id): Observable<IResponse> {
        return this.http.delete<IResponse>(`${this.url}/${id}`);
    }

}
