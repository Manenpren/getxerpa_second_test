import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { TransactionAddComponent } from './transaction-add/transaction-add.component';

const routes: Routes = [
  { path: '', component: CategoryListComponent },
  { path: 'add-category', component: CategoryAddComponent },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'category-detail', component: CategoryDetailComponent },
  { path: 'add-transaction', component: TransactionAddComponent },
  // Agrega más rutas aquí según tus necesidades
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
