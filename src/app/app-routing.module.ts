import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WorkerListComponent} from "./worker/worker-list/worker-list.component";
import {WorkerEditComponent} from "./worker/worker-edit/worker-edit.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: 'worker/:id',      component: WorkerEditComponent },
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
