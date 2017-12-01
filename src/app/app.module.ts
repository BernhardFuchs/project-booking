import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataconfigComponent } from './dataconfig/dataconfig.component';
import { SpreadsheetComponent } from './spreadsheet/spreadsheet.component';
import { EnterdataComponent } from './enterdata/enterdata.component';

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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
