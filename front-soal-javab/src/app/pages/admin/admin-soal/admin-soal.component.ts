import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin-soal',
  templateUrl: './admin-soal.component.html',
  styleUrls: ['./admin-soal.component.scss']
})
export class AdminSoalComponent implements OnInit {

  public mydate: any;
  public soals;
  public deletedSoals
  constructor(private adminservice: AdminService,
    private toastr: ToastrService,
    private translate: TranslateService

    ) {
      translate.stream('Nothing_found').subscribe((text: string) => { this.msgnothingfound = text });
    }

    public pageId = 0;
  public deletedPageId = 0;
  public msgnothingfound;
  loadMore(id: any) {

    this.adminservice.getSoals(id).subscribe(res => {
      this.soals = res
      this.pageId = id;
    }, err => {
      this.toastr.error(this.msgnothingfound, '!');
    });
  }
  loadMoredeleted(id: any) {

    this.adminservice.getDeletedJavabs(id).subscribe(res => {
      this.deletedSoals = res
      this.deletedPageId = id;
    }, err => { this.toastr.error(this.msgnothingfound, '!'); });
  }

  ngOnInit() {
    this.adminservice.getSoals().subscribe(
      res => this.soals = res
    )
    this.adminservice.getAllDeletedSoals().subscribe(
      res => this.deletedSoals = res
    )
  }
  submit() { }

  delete(id: any) {
    this.adminservice.deleteSoal(id).subscribe(
      res => this.soals =  this.soals.filter(x=> x.id !== id)
    );
  }
  undo(id: any) {
    this.adminservice.undoSoal(id).subscribe(
      res => this.deletedSoals = this.deletedSoals.filter(x=> x.id !== id));
  }
  soalfiter(dl: any) {
    return this.soals.filter(x => x.isDeleted === dl )
  }



}
