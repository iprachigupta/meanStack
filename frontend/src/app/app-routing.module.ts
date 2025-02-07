import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriesComponent } from './components/manage/categories/categories.component';
import { CategoryFormComponent } from './components/manage/category-form/category-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrandsComponent } from './components/manage/brands/brands.component';
import { BrandFormComponent } from './components/manage/brand-form/brand-form.component';
import { ProductsComponent } from './components/manage/products/products.component';
import { ProductFormComponent } from './components/manage/product-form/product-form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin/categories',
    component: CategoriesComponent,
  },
  {
    path: 'admin/categories/add',
    component: CategoryFormComponent,
  },
  {
    path: 'admin/categories/:id',
    component: CategoryFormComponent,
  },
  {
    path: 'admin/brand',
    component: BrandsComponent,
  },
  {
    path: 'admin/brand/add',
    component: BrandFormComponent,
  },
  {
    path: 'admin/brand/:id',
    component: BrandFormComponent,
  },
  {
    path: 'admin/product',
    component: ProductsComponent,
  },
  {
    path: 'admin/product/add',
    component: ProductFormComponent,
  },
  {
    path: 'admin/product/:id',
    component: ProductFormComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
