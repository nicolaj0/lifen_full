import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {Shift} from "../../shift/shift";
import {Subscription} from "rxjs";
import {Shiftservice} from "../../shift/shift.service";
import {MAT_DIALOG_DATA, MatDialogRef, MatTable} from "@angular/material";
import {WorkerService} from "../worker.service";
import {ShiftWorker} from "../worker";
import {MatCheckboxChange} from "@angular/material/typings/esm5/checkbox";
import {ɵELEMENT_PROBE_PROVIDERS__POST_R3__} from "@angular/platform-browser";

@Component({
  selector: 'app-worker-assign',
  templateUrl: './worker-assign.component.html',
  styleUrls: ['./worker-assign.component.sass']
})
export class WorkerAssignComponent implements OnInit {
// @ts-ignore
  @ViewChild(MatTable) table: MatTable<any>;
  dataSource: ShiftWorker[];
  private shiftsSub: Subscription;
  displayedColumns: string[] = ['checked', 'start_date'];


  constructor(private workerService: WorkerService,
              public dialogRef: MatDialogRef<WorkerAssignComponent>,
              @Inject(MAT_DIALOG_DATA) public data: { shift: Shift, worker:ShiftWorker }) {
  }


  highlight(element: Shift) {
    element.highlighted = !element.highlighted;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {

    this.workerService.getWorkersForAssign()
      .subscribe((workers: ShiftWorker[]) => {
        workers.forEach(s => {
          if (this.data.shift.worker && s._id === this.data.shift.worker._id) {
            s.checked = true;
          }
        })
        this.dataSource =workers


      });
  }

  onWroker($event: MatCheckboxChange, element: any) {

    const updatedPosts = this.dataSource
      .filter(worker => worker._id !== element._id)
      .forEach(e=>e.checked = false) ;

    this.data.worker = element

  }
}
