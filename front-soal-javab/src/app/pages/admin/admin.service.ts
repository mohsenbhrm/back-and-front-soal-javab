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
  public _basurl = `${environment.apiConfig.baseUrl}/api/admin/`;

  constructor(private http: HttpClient,
    private headerService: HeaderService,
    @Inject('api.config') private apiConfig: ApiConfig) { }

  getStatistics(): Observable<any> {
    return this.http.get(`${environment.apiConfig.baseUrl}/api/statistics`);
  }

  getJavabs(): Observable<any> {
    return this.http.get(this._basurl + 'javab');
  }
  getSoals(): Observable<any> {
    return this.http.get(this._basurl + 'soals');

  }
  getUsers(): Observable<any> {
    return this.http.get(this._basurl + 'users');
  }
  getdeletedUsers(): Observable<any> {
    return this.http.get(this._basurl + 'users/GetAllDeleted');
  }
  banUser(id: any): Observable<any> {
    const body = {
      id
      // captcha
    };
    return this.http.post(this._basurl + 'Users/UserBan', body);
  }
  unBanUser(id: any): Observable<any> {
    const body = {
      id
      // captcha
    };
    return this.http.post(this._basurl + 'Users/UserUnBan', body);
  }
  getTags(): Observable<any> {
    return this.http.get(this._basurl + 'tags');
  }
  getRoles(): Observable<any> {
    return this.http.get(this._basurl + 'role');
  }
  deleteJavab(vl: any): Observable<any> {
    return this.http.delete(this._basurl + 'javab/' + vl);
  }
  undojavab(value: number): Observable<any> {
    const credential = {
      value
      // captcha
    };
    return this.http.put(this._basurl + 'javab/' + value, credential);
  }

  deleteSoal(vl: any): Observable<any> {
    return this.http.delete(this._basurl + 'soals/' + vl);
  }
  undoSoal(value: number): Observable<any> {
    const credential = {
      value
      // captcha
    };
    return this.http.put(this._basurl + 'soals/' + value, credential);
  }
}
