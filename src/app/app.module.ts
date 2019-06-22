import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './main/navigation/navigation.component';
import {WorkerModule} from "./worker/worker.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {SharedModule} from "./shared/shared.module";
import {WorkerService} from "./worker/worker.service";
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavigationComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    WorkerModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [WorkerService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
