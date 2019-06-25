import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkerListComponent} from "./worker/worker-list/worker-list.component";
import {WorkerEditComponent} from "./worker/worker-edit/worker-edit.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {WorkerShiftListComponent} from "./worker/worker-shift-list/worker-shift-list.component";
import {WorkerShiftEditComponent} from "./worker/worker-shift-edit/worker-shift-edit.component";

const routes: Routes = [
  { path: 'worker/:id',      component: WorkerEditComponent },
  { path: 'worker/:id/shifts',      component: WorkerShiftListComponent },
  { path: 'worker/:id/shifts/:shiftId',      component: WorkerShiftEditComponent },
  {
    path: 'workers',
    component: WorkerListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/workers',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
