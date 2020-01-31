import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-answer-modal',
  templateUrl: './edit-answer-modal.component.html',
  styleUrls: ['./edit-answer-modal.component.scss']
})
export class EditAnswerModalComponent implements OnInit {

  @Input() item;
  matn: string;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.matn = this.item.matn;
  }

  sendEditedAnswerBack() {
    this.activeModal.close(this.matn);
  }
}
