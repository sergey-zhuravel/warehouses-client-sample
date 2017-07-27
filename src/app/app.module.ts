import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CatalogComponent } from './components/catalog/catalog.component';

import {DataService} from './services/data.service';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CatalogComponent,
    CategoryComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
