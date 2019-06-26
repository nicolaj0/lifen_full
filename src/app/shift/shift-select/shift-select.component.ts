import {Component, Inject, OnInit} from '@angular/core';
import {Shift} from "../shift";
import {Subscription} from "rxjs";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {Shiftservice} from "../shift.service";
import {ShiftWorker} from "../../worker/worker";

@Component({
  selector: 'app-shift-select',
  templateUrl: './shift-select.component.html',
  styleUrls: ['./shift-select.component.sass']
})
export class ShiftSelectComponent implements OnInit {

  dataSource: Shift[];
  private shiftsSub: Subscription;
  displayedColumns: string[] = ['checked', 'start_date'];
  private selection: string[];

  constructor(private shiftService: Shiftservice,
              public dialogRef: MatDialogRef<ShiftSelectComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { shifts: Shift[] }) {


  }


  highlight(element: Shift) {
    element.highlighted = !element.highlighted;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

    this.shiftsSub = this.shiftService.getShifts()
      .subscribe((shifts: Shift[]) => {
        this.selection = this.data.shifts.map(s => s._id) || []
        shifts.forEach(s => {
            if (this.selection.includes(s._id)) {
              s.checked = true;
            }
          }
        )
        this.dataSource = shifts;
        this.data = {shifts: this.dataSource};
      });
  }

}
