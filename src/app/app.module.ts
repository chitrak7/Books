import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent }  from './app.component';
import { Book } from "./class/book";
import { BookPreviewComponent } from "./book-preview.component";
import { BookDetailComponent } from "./book-detail.component";
import { DNFComponent } from './dnf.component';
import { BookService } from './book.service';
import { NewBookComponent }from './new-book.component';
import { AppRouting } from './app.routing';

@NgModule({
  imports:      [ 
  					BrowserModule, 
  					FormsModule, 
  					AppRouting, 
  					HttpModule,
  					InMemoryWebApiModule.forRoot(InMemoryDataService) 
				],
  declarations: [ 
  					AppComponent, 
  					BookPreviewComponent, 
  					BookDetailComponent, 
  					DNFComponent,
  					NewBookComponent 
				],
  providers: 	[
  					BookService
				],
  bootstrap:    [ 
  					AppComponent 
				]
})
export class AppModule { }
