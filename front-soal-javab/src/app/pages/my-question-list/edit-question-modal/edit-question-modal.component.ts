import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { TagModel } from '@app/pages/question/question.component';
import { QuestionService } from '@app/pages/question/question.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-edit-question-modal',
  templateUrl: './edit-question-modal.component.html',
  styleUrls: ['./edit-question-modal.component.scss']
})
export class EditQuestionModalComponent implements OnInit {
  @Input() item;

  editQuestionForm: FormGroup;

  disabled = false;

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {

    const oldTags: TagModel[] = [];
    this.item.tags.forEach(element => {
      oldTags.push({
        value: element.id,
        display: element.onvan
      });
    });

    this.editQuestionForm = this.fb.group({
      questionBody: [this.item.matn, Validators.required],
      tags: [oldTags, Validators.required]
    });
  }

  checkIfAvalable($event) {
    if (typeof ($event.value) === 'string') {

      const url = `${environment.apiConfig.baseUrl}/api/Tags/${this.item.idZirreshteh}/${$event.display}/`;
      return this.questionService.tryTagSearch(url).subscribe((res: TagModel[]) => {
        const result = res.find(el => el.display === $event.display);
        if (result) {
          const tagRes = this.editQuestionForm.controls.tags.value.find(el => el.display === $event.display);
          tagRes.value = result.value;
        }
      });
    }
  }

  requestAutocompleteItems = (text: string): Observable<any> => {
    const url = `${environment.apiConfig.baseUrl}/api/Tags/${this.item.idZirreshteh}/${text}`;
    return this.questionService.tryTagSearch(url);
  }

  sendEditedQuestionBack() {
    const editedFormData = this.editQuestionForm.getRawValue();
    const mappedTags = [];
    editedFormData.tags.forEach(element => {
      mappedTags.push({
        Id: (typeof element.value === 'string') ? 0 : element.value,
        name: element.display
      });
    });

    editedFormData.tags = mappedTags;
    this.activeModal.close(editedFormData);
  }

}
