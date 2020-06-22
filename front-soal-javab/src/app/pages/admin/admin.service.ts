import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfig } from '@app/core/common/models/api-config.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HeaderService } from '@app/layout/header/header.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient,
    private headerService: HeaderService,
    @Inject('api.config') private apiConfig: ApiConfig) { }

  getJavabs(): Observable<any>{
    return this.http.get(`${environment.apiConfig.baseUrl}/api/managejavab`)

  }
  getSoals(): Observable<any>{
    return this.http.get(`${environment.apiConfig.baseUrl}/api/managesoals`)

  }
  getUsers(): Observable<any>{
    return this.http.get(`${environment.apiConfig.baseUrl}/api/manageusers`)
  }
  getTags(): Observable<any>{
    return this.http.get(`${environment.apiConfig.baseUrl}/api/managetags`)
  }
  deleteJavab(vl: any):Observable<any>{
    return this.http.delete(`${environment.apiConfig.baseUrl}/api/managejavab/`+vl)

  }
  undojavab(value: number):Observable<any>{
    const credential = {
      value
      // captcha
    };
    return this.http.put(`${environment.apiConfig.baseUrl}/api/managejavab/`+value,credential)
  }

  deleteSoal(vl: any): Observable<any>{
    return this.http.delete(`${environment.apiConfig.baseUrl}/api/managesoals/`+vl)
  }
  undoSoal(value: number):Observable<any>{
    const credential = {
      value
      // captcha
    };
    return this.http.put(`${environment.apiConfig.baseUrl}/api/managesoals/`+value,credential)
  }
}
