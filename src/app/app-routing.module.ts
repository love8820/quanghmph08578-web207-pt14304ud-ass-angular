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
import { AdminComponent } from './backend/admin/admin.component';
import { DashboardComponent } from './backend/dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [ 
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'news', component: NewsComponent},
  // {path: 'manager', component: ManagerComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product/list', component: ProductListComponent}, 
  // {path: 'product/add', component: ProductAddComponent},
  {path: 'product/:productID', component: ProductDetailComponent},
  // {path: 'product/edit/:productID', component: ProductEditComponent},
  
  {path: 'admin', component:AdminComponent,
    children: [
      {path: '', redirectTo:'dashboard', pathMatch:'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'product/list', component: ProductListComponent},
      {path: 'product/add', component: ProductAddComponent},
      {path: 'product/:productID', component: ProductDetailComponent},
      {path: 'product/edit/:productID', component: ProductEditComponent},
    ] 
},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 