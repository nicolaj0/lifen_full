import { Component, OnInit } from '@angular/core';
import {ShiftWorker} from "../../worker/worker";
import {Shiftservice} from "../shift.service";
import {Subscription} from "rxjs";
import {Shift} from "../shift";
import {WorkerEditComponent} from "../../worker/worker-edit/worker-edit.component";
import {MatDialog} from "@angular/material";
import {ShiftEditComponent} from "../shit-edit/shit-edit.component";
import {WorkerAssignComponent} from "../../worker/worker-assign/worker-assign.component";

@Component({
  selector: 'app-shift-list',
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.sass']
})
export class ShiftListComponent implements OnInit {
  dataSource: Shift[];
  private shiftsSub: Subscription;
  displayedColumns: string[] = ['start_date', 'user', 'actions'];


  constructor(public dialog: MatDialog, private shiftService: Shiftservice) { }

  ngOnInit() {
    this.shiftsSub = this.shiftService.getShifts()
      .subscribe((shifts: Shift[]) => {
        this.dataSource = shifts.sort((a,b)=> {
          if (a.start_date > b.start_date) return 1;
          if (a.start_date < b.start_date) return -1;});
      });
  }

  addShift() {
    const dialogRef = this.dialog.open(ShiftEditComponent, {
      width: '250px',
      data: {shifts : this.dataSource, shiftToAdd : {}}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.shiftService.addShift(result).subscribe(f=> this.ngOnInit());
    });
  }

  deleteShift(id: any) {
  }

  assign(element: Shift) {
    const dialogRef = this.dialog.open(WorkerAssignComponent, {
      width: '250px',
      data: {shift : element, worker : {}}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if (result.worker.checked){
        result.shift.user_id = result.worker._id
      }
      else{
        result.shift.user_id = null
      }
      this.shiftService.update(result.shift).subscribe(res=> {
        this.ngOnInit()

      });
    });

  }

  isPast(start_date: Date): boolean {
    let today = new Date();
    today.setDate(today.getDate()-1);
    return (today.toISOString()>start_date.toString())
  }
}
