import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { Book } from "./class/book";
import { BookPreviewComponent } from "./book-preview.component";
import { BookDetailComponent } from "./book-detail.component";
import { DNFComponent } from './dnf.component';
import { BookService } from './book.service';
import { AppRouting } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRouting ],
  declarations: [ AppComponent, BookPreviewComponent, BookDetailComponent, DNFComponent ],
  providers: [BookService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
