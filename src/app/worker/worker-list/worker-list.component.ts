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
  dataSource= new WorkerDataSource(this.workerSrevice)
  displayedColumns: string[] = ['id', 'first_name', 'status','actions'];
  constructor(public dialog: MatDialog, private workerSrevice : WorkerService) { }

  ngOnInit() {

  }


  openEditModal(row:ShiftWorker): void {
    const dialogRef = this.dialog.open(WorkerEditComponent, {
      width: '250px',
      data: row
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      row = result;
      if (row.id === 0){
        this.workerSrevice.addWorker(row).subscribe(()=>{
          this.dataSource.connect().subscribe(()=>{
            this.table.renderRows();
          });

        })
      }
    });
  }

  deleteWorker(element: string) {
    this.workerSrevice.deleteWorker(element)
  }

  editWorker(element: any) {

  }
}

export class WorkerDataSource extends DataSource<any> {
  constructor(private userService: WorkerService) {
    super();
  }
  connect(): Observable<ShiftWorker[]> {
    return this.userService.getWorkers();
  }
  disconnect() {}
}


