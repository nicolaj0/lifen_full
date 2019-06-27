import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WorkerListComponent} from "./worker/worker-list/worker-list.component";
import {WorkerEditComponent} from "./worker/worker-edit/worker-edit.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {WorkerShiftListComponent} from "./worker/worker-shift-list/worker-shift-list.component";
import {ShiftListComponent} from "./shift/shift-list/shift-list.component";
import {ShiftEditComponent} from "./shift/shit-edit/shit-edit.component";
import {ShiftSelectComponent} from "./shift/shift-select/shift-select.component";
import {WorkerAssignComponent} from "./worker/worker-assign/worker-assign.component";

const routes: Routes = [
  {path: 'worker/:id', component: WorkerEditComponent},
  {path: 'worker/:id/shifts', component: WorkerShiftListComponent},
  {
    path: 'workers',
    component: WorkerListComponent,
    data: {title: 'Workers List'}
  },
  {
    path: 'shifts',
    component: ShiftListComponent,
    data: {title: 'Shifts List'}
  },
  {
    path: 'shifts/:id',
    component: ShiftEditComponent,
    data: {title: 'Shift'}
  },
  {
    path: 'shifts/select',
    component: ShiftSelectComponent,
    data: {title: 'Shift'}
  },
  {
    path: 'worker/assign',
    component: WorkerAssignComponent,
    data: {title: 'Shift'}
  },
  {
    path: '',
    redirectTo: '/workers',
    pathMatch: 'full'
  },
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
