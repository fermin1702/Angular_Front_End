import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private baseEndPoint = 'http://localhost:8090/api';
  constructor(private http: HttpClient) { }
}
