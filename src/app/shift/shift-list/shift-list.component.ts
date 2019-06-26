import { Component, OnInit } from '@angular/core';
import {ShiftWorker} from "../../worker/worker";
import {Shiftservice} from "../shift.service";
import {Subscription} from "rxjs";
import {Shift} from "../shift";
import {WorkerEditComponent} from "../../worker/worker-edit/worker-edit.component";
import {MatDialog} from "@angular/material";
import {ShiftEditComponent} from "../shit-edit/shit-edit.component";

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.sass']
})
export class ShiftListComponent implements OnInit {
  dataSource: Shift[];
  private shiftsSub: Subscription;
  displayedColumns: string[] = ['start_date', 'user_id', 'actions'];

  constructor(public dialog: MatDialog, private shiftService: Shiftservice) { }

  ngOnInit() {
    this.shiftsSub = this.shiftService.getShifts()
      .subscribe((shifts: Shift[]) => {
        this.dataSource = shifts;
      });
  }


  addShift() {
    const dialogRef = this.dialog.open(ShiftEditComponent, {
      width: '250px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.shiftService.addShift(result).subscribe(f=> this.ngOnInit());

    });

  }

  deleteShift(id: any) {

  }

  removeWorker(element: any) {

  }
}
