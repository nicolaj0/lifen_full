import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkerListComponent} from './worker-list/worker-list.component';
import { WorkerEditComponent } from './worker-edit/worker-edit.component';
import {SharedModule} from "../shared/shared.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ WorkerListComponent, WorkerEditComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ]
})
export class WorkerModule { }
