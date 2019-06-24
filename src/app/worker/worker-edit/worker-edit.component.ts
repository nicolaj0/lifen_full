import {Component, Inject, OnInit} from '@angular/core';
import {ShiftWorker} from "../worker";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {Status} from "../status";



@Component({
  selector: 'app-worker-edit',
  templateUrl: './worker-edit.component.html',
  styleUrls: ['./worker-edit.component.sass']
})
export class WorkerEditComponent implements OnInit {
  statuses: Status[] = [{key: 1, viewValue: 'medic'},
    {key: 2, viewValue: 'interne'}, {key: 3, viewValue: 'interim'}
  ];

  constructor(
    public dialogRef: MatDialogRef<WorkerEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ShiftWorker) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
