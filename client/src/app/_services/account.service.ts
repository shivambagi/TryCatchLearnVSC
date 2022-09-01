import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //In previous versions of angular we needed to add services in provider array in app.module, in newer versions the provider: 'root' does the job
})
export class AccountService {
  baseUrl =  'https://localhost:5001/api/';

  constructor(private http: HttpClient) { }

  login(model: any){
    return this.http.post(this.baseUrl + 'account/login',model);
  }
}
