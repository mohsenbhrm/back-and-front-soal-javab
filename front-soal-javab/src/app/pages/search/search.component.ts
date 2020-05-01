import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { interval, Observable, Subscription } from 'rxjs';
import { SearchService } from './search.service';
import { map } from 'rxjs/operators';

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
  soalcount ;
  newFeedTimer: Observable<any>;
  constructor(private searchservice: SearchService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    // this.searchservice.getInitFeeds().subscribe(res =>
    //   {
    //     this.questionList = res;
    //   });
      this.searchservice.search("د").subscribe(res =>
        {
          this.questionList = res;
        });
      this.searchservice.getSoalCount().subscribe(sts => {
        this.soalcount = sts;
      })
  }

}
