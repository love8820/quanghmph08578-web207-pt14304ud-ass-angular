import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ManagerComponent } from './manager/manager.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'manager', component: ManagerComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/list', component: ProductListComponent}, 
  {path: 'product/add', component: ProductAddComponent},
  {path: 'product/:productID', component: ProductDetailComponent},
  {path: 'product/edit/:productID', component: ProductEditComponent},
  
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
