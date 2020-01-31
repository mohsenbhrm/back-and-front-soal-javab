import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  changePassword(body): Observable<any> {
    return this.http.post(`${environment.apiConfig.baseUrl}/api/Account/ChangePassword`, body);
  }
}
