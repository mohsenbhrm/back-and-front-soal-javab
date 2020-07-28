import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HeaderService } from '@app/layout/header/header.service';
import { map } from 'rxjs/operators';
import { ApiConfig } from '@app/core/common/models/api-config.model';
import { search } from "./search.model";


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchResults = new BehaviorSubject<search>(null);


  constructor(private http: HttpClient,
              private headerService: HeaderService,
              @Inject('api.config') private apiConfig: ApiConfig,
              ) { }


  getSoalCount(): Observable<any> {
    return this.http.get(`${environment.apiConfig.baseUrl}/api/statistics`)
    .pipe(map((sts: any) => {
      return sts;
    }));
    }



    onResults() {
      return this.searchResults.asObservable();
    }
    search(src: string) {
      const credential = {
        src
        // captcha
      };
      this.http.post(`${this.apiConfig.baseUrl}/api/essentials/search`, credential)
      .subscribe((results: search) => this.searchResults.next(results));
    }
}
