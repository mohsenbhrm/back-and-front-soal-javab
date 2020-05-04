import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { interval, Observable, Subscription } from 'rxjs';
import { SearchService } from './search.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  statics ;
  questionList: any[];
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
              private router: Router) { }

  ngOnInit() {
    this.rout.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('search');
      this.src = id;
      console.log('searc  => ' + this.src);

    });
    // this.searchservice.getInitFeeds().subscribe(res =>
    //   {
    //     this.questionList = res;
    //   });
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

}
