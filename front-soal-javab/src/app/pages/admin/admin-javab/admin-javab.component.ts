import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-javab',
  templateUrl: './admin-javab.component.html',
  styleUrls: ['./admin-javab.component.scss']
})
export class AdminJavabComponent implements OnInit {

  public javab;
  public deletedJavab;
  public pageId = 0;
  public deletedPageId = 0;
  public msgnothingfound;
  constructor(private adminServices: AdminService,
    private toastr: ToastrService,
    private translate: TranslateService
  ) {
    translate.stream('Nothing_found').subscribe((text: string) => { this.msgnothingfound = text });

  }

  ngOnInit() {
    this.adminServices.getJavabs().subscribe(res => this.javab = res)
    this.adminServices.getDeletedJavabs().subscribe(res => this.deletedJavab = res)
  }
  delete(id: any) {
    this.adminServices.deleteJavab(id).subscribe(
      res => this.javab = this.javab.filter(x => x.id !== id))
  }
  undo(id: any) {
    this.adminServices.undojavab(id).subscribe(
      res => this.deletedJavab = this.deletedJavab.filter(x => x.id !== id))
  }

  loadMore(id: any) {

    this.adminServices.getJavabs(id).subscribe(res => {
      this.javab = res
      this.pageId = id;
    }, err => {
      this.toastr.error(this.msgnothingfound, '!');
    });
  }
  loadMoredeleted(id: any) {

    this.adminServices.getDeletedJavabs(id).subscribe(res => {
      this.deletedJavab = res
      this.deletedPageId = id;
    }, err => { this.toastr.error(this.msgnothingfound, '!'); });
  }
}
