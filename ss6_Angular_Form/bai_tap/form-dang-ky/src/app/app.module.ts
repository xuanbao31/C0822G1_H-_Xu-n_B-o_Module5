import { BrowserModule } from '@angular/platform-browser';
import {ApplicationModule, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FomrDangKyComponent } from './fomr-dang-ky/fomr-dang-ky.component';
import { ListComponent } from './list/list.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    FomrDangKyComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApplicationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
