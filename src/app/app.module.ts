import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectDataComponent } from './project-data/project-data.component';
import {ProjectListComponent} from './project-list/project-list.component'
import {AngularWebStorageModule} from "angular-web-storage";
import {CommonService} from "./common.service";

@NgModule({
  declarations: [
    AppComponent,
    ProjectDataComponent,
    ProjectListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularWebStorageModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
