import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookDetailComponent } from './book-detail.component';
import { BookPreviewComponent } from './book-preview.component';
import { DNFComponent } from './dnf.component';


const appRoutes: Routes = [
  { path: 'home', component: BookPreviewComponent },
  { path: 'book/:id', component: BookDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  { path: '**', component: DNFComponent },


];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouting { }