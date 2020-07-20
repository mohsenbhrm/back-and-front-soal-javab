import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-javab',
  templateUrl: './admin-javab.component.html',
  styleUrls: ['./admin-javab.component.scss']
})
export class AdminJavabComponent implements OnInit {

  public javab;
  constructor(private adminServices: AdminService) { }

  ngOnInit() {
    this.adminServices.getJavabs().subscribe(res=> this.javab=res)
  }
  delete(id: any){
    this.adminServices.deleteJavab(id).subscribe(
      res=> this.javab = res)
  }
  undo(id: any){
    this.adminServices.undojavab(id).subscribe(
      res=> this.javab = res)
  }
  javabfiter(dl: any) {
   return this.javab.filter(x => x.isDeleted == dl )
  }


}
