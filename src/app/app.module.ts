import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DataconfigComponent } from './dataconfig/dataconfig.component';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';
import { EnterdataComponent } from './enterdata/enterdata.component';
import {CreateSpreadsheetService} from "./create-spreadsheet.service";

@NgModule({
  declarations: [
    AppComponent,
    DataconfigComponent,
    SpreadsheetComponent,
    EnterdataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
