import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from './question.service';
import { Observable, of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

export interface TagModel {
  value: number;
  display: string;
  usedSoal: number;
  usedUser: number;
}
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  tagInsert :string;
  tagNext :string;
  registerQuestion: FormGroup;
  // fields: any[];
  // activeSubFields: any[];

  disabled = false;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService,
    private toastrService: ToastrService,
    translate: TranslateService
  ) {
    translate.stream('Insert-Tag').subscribe((text:string) => {this.tagInsert = text});
    translate.stream('Next-Tag').subscribe((text:string) => {this.tagNext = text});
}

  ngOnInit() {
    // this.questionService.getEssentialForQuestion().subscribe(fields => {
    //   this.fields = fields;
    //   // console.log(fields);

    // });
    this.initForm();

    // this.registerQuestion.controls.field.valueChanges.subscribe(changes => {
    //   const x = this.fields.find(el => el.id === changes);
    //   if (x) {
    //     this.activeSubFields = x.zirreshteh;
    //   }

    // });
  }

  requestAutocompleteItems = (text: string): Observable<any> => {
    // if (this.registerQuestion.controls.subField.hasError('required')) {
    //   this.registerQuestion.controls.subField.markAsTouched();
    //   this.registerQuestion.controls.field.markAsTouched();
    //   return (of([]).pipe(map(data => {
    //     return data;
    //   })));
    // } else {

    return this.questionService.tryTagSearch(text);
    // }

  }

  checkIfAvalable($event) {
    if (typeof ($event.value) === 'string') {

      return this.questionService.tryTagSearch($event.value).subscribe((res: TagModel[]) => {
        const result = res.find(el => el.display === $event.display);
        if (result) {
          const tagRes = this.registerQuestion.controls.tags.value.find(el => el.display === $event.display);
          tagRes.value = result.value;
        }
      });
    }
  }

  initForm() {
    this.registerQuestion = this.fb.group({
      // field: [null, Validators.required],
      // subField: [null, Validators.required],
      questionBody: [null, Validators.required],
      tags: [[], Validators.required]
    });
  }

  registerQuestionForm() {
    if (this.registerQuestion.invalid) {
      this.registerQuestion.markAllAsTouched();
      return;
    }
    this.disabled = true;
    let tagsArr: any[] = this.registerQuestion.controls.tags.value;

    tagsArr = tagsArr.map(item => {
      const newItem = {
        id: typeof (item.value) === 'string' ? 0 : item.value,
        name: item.display
      };
      return newItem;
    });

    const body = {
      id: 0,
      matn: this.registerQuestion.controls.questionBody.value,
      // zirReshtehId: this.registerQuestion.controls.subField.value,
      tags: tagsArr
    };

    this.questionService.registerQuestion(body).subscribe(res => {
      this.toastrService.success(JSON.stringify(res), 'res');
      this.registerQuestion.reset();
      this.disabled = false;
    },
      err => {
        this.toastrService.error(JSON.stringify(err), 'err');

        this.disabled = false;
      });

  }

}
