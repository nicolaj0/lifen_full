import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WorkerListComponent} from './worker-list/worker-list.component';
import {WorkerEditComponent} from './worker-edit/worker-edit.component';
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";
import {WorkerShiftListComponent} from './worker-shift-list/worker-shift-list.component';
import { WorkerAssignComponent } from './worker-assign/worker-assign.component';

@NgModule({
  declarations: [WorkerListComponent, WorkerEditComponent, WorkerShiftListComponent, WorkerAssignComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class WorkerModule {
}
