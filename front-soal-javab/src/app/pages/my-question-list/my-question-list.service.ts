import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyQuestionListService {

  constructor(private http: HttpClient) { }

  getMyQuestions(): Observable<any> {
   return this.http.get(`${environment.apiConfig.baseUrl}/api/Soal`);
  }

  getMyQuestionAnswers(id): Observable<any> {
    return this.http.get(`${environment.apiConfig.baseUrl}/api/Javab/${id}`);
  }

  deleteQuestion(id): Observable<any> {
    return this.http.delete(`${environment.apiConfig.baseUrl}/api/Soal/${id}`);
  }

  editQuestion(id, item): Observable<any> {
    return this.http.put(`${environment.apiConfig.baseUrl}/api/Soal/${id}`, item);
  }
}

