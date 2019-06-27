import {Component, Inject, OnInit} from '@angular/core';
import {Shift} from "../shift";
import {Subscription} from "rxjs";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {Shiftservice} from "../shift.service";
import {ShiftWorker} from "../../worker/worker";
import {MatCheckboxChange} from "@angular/material/typings/esm5/checkbox";

@Component({
  selector: 'app-shift-select',
  templateUrl: './shift-select.component.html',
  styleUrls: ['./shift-select.component.sass']
})
export class ShiftSelectComponent implements OnInit {

  dataSource: Shift[];
  private shiftsSub: Subscription;
  displayedColumns: string[] = ['checked', 'start_date'];

  constructor(private shiftService: Shiftservice,
              public dialogRef: MatDialogRef<ShiftSelectComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { worker: string, shifts: Shift[] }) {
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

          shifts.forEach(s => {
          if (s.worker && s.worker._id === this.data.worker) {
            s.checked = true;
          }
        })

          this.dataSource = shifts;
          this.data.shifts = this.dataSource;
        }
      );
  }

  onWroker($event: MatCheckboxChange) {
    console.log($event)
  }
}
