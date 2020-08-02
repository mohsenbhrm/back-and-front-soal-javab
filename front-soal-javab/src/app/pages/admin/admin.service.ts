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

  //#region  soal
  getSoals(pageid:number = 0): Observable<any> {
    return this.http.get(this._basurl + 'soals/'+pageid);

  }
  getAllDeletedSoals(pageid:number = 0): Observable<any> {
    return this.http.get(this._basurl + 'soals/getalldeleted/'+pageid);

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
  //#endregion

  //#region javab

  getJavabs(pageid:number = 0): Observable<any> {
    return this.http.get(this._basurl + 'javab/'+pageid);
  }
  getDeletedJavabs(pageid:number = 0): Observable<any> {
    return this.http.get(this._basurl + 'javab/getalldeleted/'+pageid);
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
  //#endregion

  //#region user
  getUsers(pageid = 0): Observable<any> {
    return this.http.get(this._basurl + 'users/'+pageid);
  }
  getdeletedUsers(pageid = 0): Observable<any> {
    return this.http.get(this._basurl + 'users/GetAllDeleted/'+pageid);
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

  //#endregion

  //#region tag
  getTags(pageid = 0): Observable<any> {
    return this.http.get(this._basurl + 'tags/'+ pageid );
  }
  getDeletedTags(pageId= 0): Observable<any> {
    return this.http.get(this._basurl + 'tags/getdeleted/'+ pageId);
  }
  deleteTag(vl: any): Observable<any> {
    return this.http.delete(this._basurl + 'tags/' + vl);
  }
  undoTag(value: number): Observable<any> {
    const credential = {
      value
      // captcha
    };
    return this.http.put(this._basurl + 'tags/' + value,credential);
  }
  //#endregion

  //#region role

  getRoles(pageid= 0): Observable<any> {
    return this.http.get(this._basurl + 'role/'+ pageid);
  }

  //#endregion





}
