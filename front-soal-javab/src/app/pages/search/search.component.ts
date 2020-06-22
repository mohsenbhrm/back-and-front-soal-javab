import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { interval, Observable, Subscription } from 'rxjs';
import { SearchService } from './search.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { search } from './search.model';
import { QuestionsFeedService } from '../questions-feed/questions-feed.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  statics ;
  questionList: search;
  answer: string;
  hasTags = true;
  loadMoreLoading = false;
  answerLoading = false;
  soalcount;
  src;
  newFeedTimer: Observable<any>;
  constructor(private searchservice: SearchService,
              private toastrService: ToastrService,
              private rout:ActivatedRoute,
              private router: Router,
              public questionFeedService: QuestionsFeedService) { }

  ngOnInit() {
    this.rout.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('search');
      this.src = id;
      console.log('searc  => ' + this.src);
      this.searchservice.search2(id);
    });

    this.searchservice.onResults().subscribe(res => {
      this.questionList = res;
    })
    // this.searchservice.search(this.src).subscribe(res => {
    //   this.questionList = res;
    // });
    this.searchservice.getSoalCount().subscribe(sts => {
      this.soalcount = sts;
    });
  }
  send(item){
    this.answerLoading = true;
    this.questionFeedService.tryAnswer(item.soal.id, this.answer).subscribe(
      resp => {
        this.answerLoading = false;
        this.toastrService.success('جواب با موفقیت ثبت شد', 'ثبت پاسخ');
        this.answer = '';
      },
      err => {
        this.answerLoading = false;
        this.toastrService.error('ثبت جواب ناموفق بود', 'ثبت پاسخ');
        this.answer = '';
      });  }

}
