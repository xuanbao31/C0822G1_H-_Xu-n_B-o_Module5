import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {BodyComponent} from './component/body/body.component';
import {HomeComponent} from './component/home/home.component';
import {FacilityEditComponent} from './component/facility/facility-edit/facility-edit.component';
import {FacilityComponent} from './component/facility-add/facility.component';
import {FacilityListComponent} from './component/facility/facility-list/facility-list.component';
import {CustomerAddComponent} from './component/customer/customer-add/customer-add.component';
import {CustomerEditComponent} from './component/customer/customer-edit/customer-edit.component';
import {CustomerListComponent} from './component/customer/customer-list/customer-list.component';
import {ContractListComponent} from './component/contract-list/contract-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    FacilityEditComponent,
    FacilityComponent,
    FacilityListComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerListComponent,
    ContractListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  exports: [
    FooterComponent,
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
