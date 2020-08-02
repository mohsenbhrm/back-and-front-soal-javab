import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-tag',
  templateUrl: './admin-tag.component.html',
  styleUrls: ['./admin-tag.component.scss']
})
export class AdminTagComponent implements OnInit {

  public tags;
  public deletedtags;
  public pageId = 0;
  public deletedPageId = 0;
  public msgnothingfound;

  constructor(private adminservice: AdminService,
    private toastr: ToastrService,
    private translate: TranslateService

  ) {
    translate.stream('Nothing_found').subscribe((text: string) => { this.msgnothingfound = text });
  }


  loadMore(id: any) {

    this.adminservice.getTags(id).subscribe(res => {
      this.tags = res
      this.pageId = id;
    }, err => {
      this.toastr.error(this.msgnothingfound, '!');
    });
  }
  loadMoredeleted(id: any) {

    this.adminservice.getDeletedTags(id).subscribe(res => {
      this.deletedtags = res
      this.deletedPageId = id;
    }, err => { this.toastr.error(this.msgnothingfound, '!'); });
  }

  ngOnInit() {
    this.adminservice.getTags(0).subscribe(
      res=> this.tags = res);
      this.adminservice. getDeletedTags(0).subscribe(
        res=> this.deletedtags = res);
  }

  delete(id: any){
    this.adminservice.deleteTag(id).subscribe(
      res=> this.tags =  this.tags.filter(x => x.id !== id ))
  }
  undo(id: any){
    this.adminservice.undoTag(id).subscribe(
      res=> this.deletedtags =  this.deletedtags.filter(x=> x.id !== id))
  }
  deleteMsg(id:string) {
    const index: number = this.tags.indexOf(x => x.id === id);
    if (index !== -1) {
        this.tags.splice(index, 1);
    }

  }

}
