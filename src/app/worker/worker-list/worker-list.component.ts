import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {ShiftWorker} from "../worker";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatTable} from "@angular/material";
import {WorkerEditComponent} from "../worker-edit/worker-edit.component";
import {Observable} from "rxjs";
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
  dataSource= []
  displayedColumns: string[] = ['id', 'first_name', 'status','actions'];
  constructor(public dialog: MatDialog, private workerSrevice : WorkerService) { }

  ngOnInit() {
    this.workerSrevice.getWorkers().subscribe(data=>{
      this.dataSource = data;
    })
  }

  openEditModal(row:ShiftWorker): void {
    const dialogRef = this.dialog.open(WorkerEditComponent, {
      width: '250px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      row = result;
      if (row.id === 0){
        this.workerSrevice.addWorker(row).subscribe(()=>{
          this.ngOnInit()
        })
      }
    });
  }

  deleteWorker(element: string) {
    this.workerSrevice.deleteWorker(element).subscribe(()=>{
      this.ngOnInit()
    })
  }

  editWorker(element: any) {

  }
}


