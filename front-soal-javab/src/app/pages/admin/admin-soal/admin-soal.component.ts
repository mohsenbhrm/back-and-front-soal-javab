import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-soal',
  templateUrl: './admin-soal.component.html',
  styleUrls: ['./admin-soal.component.scss']
})
export class AdminSoalComponent implements OnInit {

  public mydate: any;
  public soals;
  constructor(private adminservice: AdminService) {

  }

  ngOnInit() {
    this.adminservice.getSoals().subscribe(
      res => this.soals = res
    )
  }
  submit() { }

  delete(id: any) {
    this.adminservice.deleteSoal(id).subscribe(
      res => this.soals = res
    );
  }
  undo(id: any) {
    this.adminservice.undoSoal(id).subscribe(
      res => this.soals = res);
  }
  soalfiter(dl: any) {
    return this.soals.filter(x => x.isDeleted === dl )
  }

}
