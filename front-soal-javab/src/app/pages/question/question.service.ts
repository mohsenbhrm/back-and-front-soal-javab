import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe,of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { TagModel } from './question.component';


@Injectable({ providedIn: 'root' })
export class QuestionService {
  constructor(private http: HttpClient) { }

  // getEssentialForQuestion(): Observable<any> {
  //   return this.http.get(`${environment.apiConfig.baseUrl}/api/Essentials`);
  // }

  tryTagSearch(text:string): Observable<any> {
    if (text.length < 3) {
      console.log(text)
      return of<any[]>([]);

    }
    const url = `${environment.apiConfig.baseUrl}/api/Tags/${text}`;
    return this.http.get(url)
      .pipe(map((data: any) => {
        return data.map(d => {
          const tagData: TagModel = {
            value: d.id,
            display: d.onvan,
            usedUser: d.usedUser,
            usedSoal: d.usedSoal
          };
          return tagData;
        });
      }));
  }

  registerQuestion(body): Observable<any> {
    return this.http.post(`${environment.apiConfig.baseUrl}/api/Soal`, body);
  }

}
