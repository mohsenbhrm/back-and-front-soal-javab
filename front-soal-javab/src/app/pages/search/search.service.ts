import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HeaderService } from '@app/layout/header/header.service';
import { map } from 'rxjs/operators';
import { ApiConfig } from '@app/core/common/models/api-config.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient,
    private headerService: HeaderService,
    @Inject('api.config') private apiConfig: ApiConfig) { }


  getInitFeeds(): Observable<any> {
    return this.http.get(`${environment.apiConfig.baseUrl}/api/SoalToUser`);
  }
  getSoalCount(): Observable<any> {
    return this.http.get(`${environment.apiConfig.baseUrl}/api/statistics`)
    .pipe(map((sts: any) => {
      return sts;
    }));
    }

    search(name: string): Observable<any> {
      const credential = {
        name
        // captcha
      };
      return this.http.post(`${this.apiConfig.baseUrl}/api/statistics`, credential)
        .pipe(map((login: any) => {
          return login;
        }
        ));
    }
}
