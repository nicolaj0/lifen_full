import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {ShiftWorker} from "../worker";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatTable} from "@angular/material";
import {WorkerEditComponent} from "../worker-edit/worker-edit.component";
import {Observable, Subscription} from "rxjs";
import {WorkerService} from "../worker.service";
import {DataSource} from "@angular/cdk/table";
import {User, UserService} from "../../services/user.service";


@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.sass']
})


export class WorkerListComponent implements OnInit {
  // @ts-ignore
  @ViewChild(MatTable) table: MatTable<any>;
  dataSource = []
  displayedColumns: string[] = ['first_name', 'status', 'actions'];
  private workersSub: Subscription;

  constructor(public dialog: MatDialog, private workerSrevice: WorkerService) {
  }

  ngOnInit() {
    this.workerSrevice.getWorkers();
    this.workersSub = this.workerSrevice.getWorkerUpdateListener()
      .subscribe((workers: ShiftWorker[]) => {
        this.dataSource = workers;
      });
  }

  editWorker(row: ShiftWorker): void {
    const dialogRef = this.dialog.open(WorkerEditComponent, {
      width: '250px',
      data: row
    });
    dialogRef.afterClosed().subscribe(result => {
      row = result;
      this.workerSrevice.editWorker(row);
    });
  }

  addWorker(): void {
    const dialogRef = this.dialog.open(WorkerEditComponent, {
      width: '250px',
      data : {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.workerSrevice.addWorker(result);
    });
  }

  deleteWorker(element: string) {
    this.workerSrevice.deleteWorker(element)
  }


}


