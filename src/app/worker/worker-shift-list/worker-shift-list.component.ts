import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatTable} from "@angular/material";
import {ShiftWorker} from "../worker";
import {Shift} from "../../shift/shift";
import {WorkerEditComponent} from "../worker-edit/worker-edit.component";
import {ShiftListComponent} from "../../shift/shift-list/shift-list.component";
import {ShiftSelectComponent} from "../../shift/shift-select/shift-select.component";

@Component({
  selector: 'app-worker-shift-list',
  templateUrl: './worker-shift-list.component.html',
  styleUrls: ['./worker-shift-list.component.sass']
})
export class WorkerShiftListComponent implements OnInit {
  // @ts-ignore
  @ViewChild(MatTable) table: MatTable<any>;
  dataSource = []
  displayedColumns: string[] = ['start_date'];

  constructor(
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<WorkerShiftListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {shifts:Shift[],worker : ShiftWorker}) {
    this.dataSource = data.shifts;

  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  addShift() {
    const dialogRef = this.dialog.open(ShiftSelectComponent, {
      width: '250px',
      data : []
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)

      this.dataSource.push(...result);
      this.table.renderRows()


      //this.workerSrevice.addWorker(result);
    });

  }

  removeShift(id: any) {

  }
}
