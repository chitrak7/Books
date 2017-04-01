import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { Book } from "./class/book";
import { BookPreviewComponent } from "./book-preview.component";
import { BookService } from './book.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BookPreviewComponent ],
  providers: [BookService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
