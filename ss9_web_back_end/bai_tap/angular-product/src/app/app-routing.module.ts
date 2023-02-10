import {Component, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from "./component/product-list/product-list.component";
import {ProductCreateComponent} from "./component/product-create/product-create.component";


const routes: Routes = [
  {path:"",component:ProductListComponent},
  {path:"create",component:ProductCreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
